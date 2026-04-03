package com.alpha.rapidroute.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alpha.rapidroute.dto.TruckDto;
import com.alpha.rapidroute.entity.Carrier;
import com.alpha.rapidroute.entity.Driver;
import com.alpha.rapidroute.entity.Truck;
import com.alpha.rapidroute.repository.CarrierRepo;
import com.alpha.rapidroute.repository.DriverRepo;
import com.alpha.rapidroute.repository.TruckRepo;

@Service
public class TruckService {

	@Autowired
	private TruckRepo truckrepository;

	@Autowired
	private DriverRepo driverrepo;

	@Autowired
	private CarrierRepo carrierrepo;

	public Truck saveTruck(TruckDto tdto) {

		Truck t = new Truck();
		t.setTname(tdto.getTruckname());
		t.setTruckno(tdto.getTruckno());
		t.setCapacity(tdto.getCapacity());
		t.setStatus(tdto.getStatus());

		List<Carrier> cList = tdto.getCarrier();
		for (Carrier c : cList) {

			carrierrepo.save(c);
		}
		t.setCarrier(cList);

		truckrepository.save(t);
		for (Carrier c : cList) {

			c.setTruck(t);
		}
		return t;
	}

	// --- finding by Truck id
//	public Optional<Truck> findById(int id) {
//		return truckrepository.findById(id);
//	}

	// --- finding by truckDto number
	public Optional<Truck> findByTruckno(int tno) {
		return truckrepository.findByTruckno(tno);
	}

	// --- update Truck
	public String updateTruck(int id, long contactno) {

		Truck trucks = truckrepository.findById(id).orElseThrow(() -> new RuntimeException("Truck not Found"));

		Carrier carrier = carrierrepo.findByContactno(contactno)
				.orElseThrow(() -> new RuntimeException("Carrier not found"));

		// yha pe list bnake operation perform krna

		if(carrier.getTruck()==null) {
			trucks.getCarrier().add(carrier);
		}
		else {
			//throw ex
		}
		truckrepository.save(trucks);

		return trucks.getCapacity() + " truck updat{ed for carrier " + carrier.getCname();
	}

}
