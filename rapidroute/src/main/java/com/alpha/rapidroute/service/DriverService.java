package com.alpha.rapidroute.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alpha.rapidroute.entity.Driver;
import com.alpha.rapidroute.entity.Truck;
import com.alpha.rapidroute.repository.DriverRepo;
import com.alpha.rapidroute.repository.TruckRepo;

@Service
public class DriverService {
	
	@Autowired
	private DriverRepo driverrepo;
	
	@Autowired
	private TruckRepo truckrepo;

	public Driver saveDriver(Driver d) {
     	return driverrepo.save(d);
	}


	public String updateDriver(int id, long contactno) {
		
		Optional<Truck> t= truckrepo.findById(id);
		Truck truck=t.get();
		
		Driver d= driverrepo.findByContactno(contactno).get();
		d.setTruck(truck);
		
		
		 
		 
		 return "driver and truck not found";
		
	}

}
