package com.alpha.rapidroute.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alpha.rapidroute.entity.Address;
import com.alpha.rapidroute.repository.AddressRepo;

@Service
public class AddressService {
	
	@Autowired
	private AddressRepo addressrepository;

	public Address saveAddress(Address a) {
		
		return addressrepository.save(a);
	}

}
