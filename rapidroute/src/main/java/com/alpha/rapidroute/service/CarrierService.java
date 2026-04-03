package com.alpha.rapidroute.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alpha.rapidroute.entity.Carrier;
import com.alpha.rapidroute.repository.CarrierRepo;

@Service
public class CarrierService {
	
	@Autowired
	private CarrierRepo carrierrepository;

	public Carrier saveCarrier(Carrier c) {
		// TODO Auto-generated method stub
		return carrierrepository.save(c);
	}

}
