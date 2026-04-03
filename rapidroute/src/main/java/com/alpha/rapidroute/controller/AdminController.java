package com.alpha.rapidroute.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.alpha.rapidroute.dto.TruckDto;
import com.alpha.rapidroute.entity.Address;
import com.alpha.rapidroute.entity.Cargo;
import com.alpha.rapidroute.entity.Carrier;
import com.alpha.rapidroute.entity.Driver;
import com.alpha.rapidroute.entity.Loading;
import com.alpha.rapidroute.entity.Order;
import com.alpha.rapidroute.entity.Truck;
import com.alpha.rapidroute.entity.Unloading;
import com.alpha.rapidroute.service.AddressService;
import com.alpha.rapidroute.service.CargoService;
import com.alpha.rapidroute.service.CarrierService;
import com.alpha.rapidroute.service.DriverService;
import com.alpha.rapidroute.service.LoadingService;
import com.alpha.rapidroute.service.OrderService;
import com.alpha.rapidroute.service.TruckService;
import com.alpha.rapidroute.service.UnloadingService;

@RestController
@RequestMapping("/admin")
public class AdminController {

	@Autowired
	private DriverService driverservice;

	@Autowired
	private TruckService truckservice;

	@Autowired
	private AddressService address;

	@Autowired
	private CarrierService carrier;

	@Autowired
	private OrderService orderservice;

	@Autowired
	private CargoService cargoservice;

	@Autowired
	private LoadingService loadingservice;

	@Autowired
	private UnloadingService unloadingservice;

	// -------->>>> saving address here -------------->>>>>

	@PostMapping("/saveaddress")
	public Address saveAddress(@RequestBody Address a) {

		return address.saveAddress(a);

	}

	// -------->> saving carrier ---------->>

	@PostMapping("/savecarrier")
	public Carrier saveCarrier(@RequestBody Carrier c) {

		return carrier.saveCarrier(c);
	}

	// ----->>> saving truck ------>>>

	@PostMapping("/savetruck")
	public Truck saveTruck(@RequestBody TruckDto tdto) {
		return truckservice.saveTruck(tdto);
	}

	// ---->> saving driver ----->>>>
	@PostMapping("/savedriver")
	public Driver saveDriver(@RequestBody Driver d) {
		return driverservice.saveDriver(d);
	}

	// --->> saving order --->>

	@PostMapping("/saveorder")
	public Order saveOrder(@RequestBody Order o) {
		return orderservice.saveOrder(o);
	}

	// --->> saving cargo --->>

	@PostMapping("/savecargo")
	public Cargo saveCargo(@RequestBody Cargo c) {
		return cargoservice.saveCargo(c);
	}

	// --->> saving loading --->>

	@PostMapping("/saveloading")
	public Loading saveLoading(@RequestBody Loading l) {
		return loadingservice.save(l);
	}

	// --->> saving unloading --->>

	@PostMapping("/saveunloading")
	public Unloading saveUnloading(@RequestBody Unloading u) {
		return unloadingservice.save(u);
	}

	// --->> finding Operation start here ---->>>
	// finding by id
//	
//	@GetMapping("/truckfindbyid")
//	public Optional<Truck> findById(@RequestParam int id) {
//		return truckservice.findById(id);
//	}
//	
	// finding by truckno

	@GetMapping("/findtruckbyno")
	public Optional<Truck> findTruckByNumber(@RequestParam int tno) {
		return truckservice.findByTruckno(tno);
	}

	// ----- update operation of driver

	@PatchMapping("/updatedriver")
	public String updateDriver(@RequestParam int id , long contactno) {
		
		return driverservice.updateDriver(id, contactno);
		  
		  
	}
	
	// --------- assign carrier ---
	
	@PatchMapping("/updateTruck")
	public String updateTruck(@RequestParam int id, long contactno) {
		
		return truckservice.updateTruck(id,contactno);
	}
	
	//1-
	// admin will update the order to assign the carrier to the order 
	// order status should change to confirm 
	// find the the carrier by mob no.
	// check the truck capacity if cpacity is available then assign or throw exception
	
	
	@PatchMapping("/assigncarrier")
	public String assignCarrierToOrder(
	        @RequestParam int id,
	        @RequestParam long carrierMobileNo) {

	    return orderservice.assignCarrier(id, carrierMobileNo);
	}
	
	
	
	
	//2-
	//update order to update the loading info date and time 
	// change the order status to On the way 
	
	@PatchMapping("/updateloadinginfo")
	public String updateLoadingInfo(@RequestParam int orderId,
			@RequestParam String date, @RequestParam String time) {
		
		return orderservice.updateLoadingInfo(orderId, date, time);
	}
	
	
	
	
	
	//3 - 
	//update the order to update unloading info date and time 
	// change the order status to Delivered
	
	@PatchMapping("/updateunloading")
	public String updateUnloadingInfo(@RequestParam int orderId,
			                     @RequestParam String date,
			                     @RequestParam String time) {
		
		return orderservice.updateUnloadingInfo(orderId, date, time);
	}
	
	
	

}
