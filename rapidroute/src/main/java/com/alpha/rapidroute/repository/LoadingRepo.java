package com.alpha.rapidroute.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.alpha.rapidroute.entity.Loading;

@Service
public interface LoadingRepo extends JpaRepository<Loading, Integer>{

}
