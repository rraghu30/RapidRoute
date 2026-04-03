package com.alpha.rapidroute.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alpha.rapidroute.entity.Unloading;
import com.alpha.rapidroute.repository.UnloadingRepo;

@Service
public class UnloadingService {
	
	@Autowired
	private UnloadingRepo unloadingrepo;

	public Unloading save(Unloading u) {
		return unloadingrepo.save(u);
	}

}
