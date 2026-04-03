package com.alpha.rapidroute.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alpha.rapidroute.entity.Cargo;
import com.alpha.rapidroute.repository.CargoRepo;

@Service
public class CargoService {
	
	@Autowired
	private CargoRepo cargorepo;

	public Cargo saveCargo(Cargo c) {
		
		return cargorepo.save(c);
	}

}
