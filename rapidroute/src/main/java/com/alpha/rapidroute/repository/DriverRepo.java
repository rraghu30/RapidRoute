package com.alpha.rapidroute.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alpha.rapidroute.entity.Driver;
import com.alpha.rapidroute.entity.Truck;

@Repository
public interface DriverRepo extends JpaRepository<Driver, Integer> {



	Optional<Driver> findByContactno(long contactno);

}
