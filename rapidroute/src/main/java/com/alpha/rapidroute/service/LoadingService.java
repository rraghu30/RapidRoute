package com.alpha.rapidroute.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alpha.rapidroute.entity.Loading;
import com.alpha.rapidroute.repository.LoadingRepo;

@Service
public class LoadingService {
	
	@Autowired
	private LoadingRepo loadingrepo;

	public Loading save(Loading l) {

		return loadingrepo.save(l);
	}

}
