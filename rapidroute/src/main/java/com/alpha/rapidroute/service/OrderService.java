package com.alpha.rapidroute.service;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.core.Local;
import org.springframework.stereotype.Service;

import com.alpha.rapidroute.dto.OrderDto;
import com.alpha.rapidroute.entity.Address;
import com.alpha.rapidroute.entity.Cargo;
import com.alpha.rapidroute.entity.Carrier;
import com.alpha.rapidroute.entity.Loading;
import com.alpha.rapidroute.entity.Order;
import com.alpha.rapidroute.entity.Truck;
import com.alpha.rapidroute.entity.Unloading;
import com.alpha.rapidroute.repository.AddressRepo;
import com.alpha.rapidroute.repository.CarrierRepo;
import com.alpha.rapidroute.repository.OrderRepo;
import com.alpha.rapidroute.repository.UnloadingRepo;

@Service
public class OrderService {

	@Autowired
	private OrderRepo orderrepo;

	@Autowired
	private CarrierRepo carrierRepo;

	@Autowired
	private AddressRepo addressrepo;

	@Autowired
	private UnloadingRepo unloadingrepo;

	// save order

	public Order saveOrder(Order o) {
		Carrier c = o.getCarrier();
		carrierRepo.save(c);
		return orderrepo.save(o);
	}

	// -------------------->> OrderDto -------------------->>

	public void placeOrder(OrderDto odto) {

		// ------------->> Order Details
		Order newOrder = new Order();

		newOrder.setOrderdate(LocalDate.now());
		newOrder.setStatus("Placed");

		// ------------->> Cargo details ------->>>>>>>>>>>>
		Cargo cargo = new Cargo();

		cargo.setCname(odto.getCargoname());
		cargo.setDescription(odto.getCargodescription());
		cargo.setWeight(odto.getCargoweigth());
		cargo.setCount(odto.getCargocount());

		newOrder.setCargo(cargo);
		newOrder.setCost(100 * odto.getCargocount() * odto.getCargoweigth());

		// --->> Loading Details

		Loading loading = new Loading();

		Optional<Address> loadAddress = Optional.of(addressrepo.findByCity(odto.getLoadingaddress())
				.orElseThrow(() -> new RuntimeException("Load Address not found")));
		Optional<Address> unloadAddress = Optional.of(addressrepo.findByCity(odto.getUnloadingaddress())
				.orElseThrow(() -> new RuntimeException("Unload Address not Found")));

		loading.setAddress(loadAddress.get());

		Unloading unloading = new Unloading();

		unloading.setAddress(unloadAddress.get());

		newOrder.setLoading(loading);
		newOrder.setUnloading(unloading);

		orderrepo.save(newOrder);

	}

	// 1-
	// admin will update the order to assign the carrier to the order
	// order status should change to confirm
	// find the the carrier by mob no.
	// check the truck capacity if cpacity is available then assign or throw
	// exception

	public String assignCarrier(int id, long carrierMobileNo) {

		Order order = orderrepo.findById(id).orElseThrow(() -> new RuntimeException("Order Not Found :"));

		Carrier carrier = carrierRepo.findByContactno(carrierMobileNo)
				.orElseThrow(() -> new RuntimeException("Carrier not found :"));

		Truck truck = carrier.getTruck();

		if (truck == null) {
			throw new RuntimeException("Carrier has no truck assigned");
		}

		double orderWeight = order.getCargo().getWeight();

		if (truck.getCapacity() < orderWeight) {
			throw new RuntimeException("Truck capacity not sufficient");
		}

		order.setCarrier(carrier);

		order.setStatus("Confired");

		return "Carrier assinged Succefully and Order Confirmed";
	}

	// 2-
	// update order to update the loading info date and time
	// change the order status to On the way

	public String updateLoadingInfo(int orderId, String date, String time) {

		Order order = orderrepo.findById(orderId).orElseThrow(() -> new RuntimeException("Order Not Found "));

		LocalDate localdate = LocalDate.parse(date);
		LocalTime localtime = LocalTime.parse(time);

		order.setOrderdate(localdate);
		order.setOrdertime(localtime);

		order.setStatus("On the way");

		orderrepo.save(order);

		return "Loading info updated & Order status changed to ON_THE_WAY";
	}

	// 3 -
	// update the order to update unloading info date and time
	// change the order status to Delivered

	public String updateUnloadingInfo(int orderId, String date, String time) {

		Order order = orderrepo.findById(orderId).orElseThrow(() -> new RuntimeException("Order not Found"));

		Unloading unloading = order.getUnloading();

		if (unloading == null) {
			throw new RuntimeException("Unloading details not found for this details");
		}

		unloading.setUdate(LocalDate.parse(date));
		unloading.setUtime(LocalTime.parse(time));

		order.setStatus("Delivered");

		unloadingrepo.save(unloading);
		orderrepo.save(order);

		return "Unloading Updated & Order Delivered Successfully";
	}

	// 1
	// cancle order request
	// cutomer can cancle the order only if order is placed and not yet loaded
	// or throw the exception

	public String cancelOrder(int orderId) {

		Order order = orderrepo.findById(orderId).orElseThrow(() -> new RuntimeException("Order Not Found"));

		// checking order
		if (order.getStatus().equals("Pending")) {
			throw new RuntimeException("Order cannot be cancelled. It is allready processed or Loaded");
		}

		order.setStatus("Cancelled");

		orderrepo.save(order);

		return "Order cancelled successfully";
	}

	// 2
	// return the order
	// if order is loaded then have to return the order
	// to return the place new order with exactly opposit loading and unloading
	// dont take user input . get the data from existing order to place return order
	// .

	public String returnOrder(int orderId) {

		Order existOrder = orderrepo.findById(orderId).orElseThrow(() -> new RuntimeException("Order Not Found"));

		// check
		if (existOrder.getStatus().equals("On the way") || existOrder.getStatus().equals("Delivered")) {
			throw new RuntimeException("Ordered cannot be returned unless it is loaded and Delivered");
		}

		Order returnOrder = new Order();

		returnOrder.setCargo(existOrder.getCargo());

		Loading returnloading = new Loading();
		returnloading.setAddress(existOrder.getUnloading().getAddress());

		Unloading returnunloading = new Unloading();

		returnOrder.setLoading(returnloading);
		returnOrder.setUnloading(returnunloading);

		return "Returned Order created successfully";
	}

}
