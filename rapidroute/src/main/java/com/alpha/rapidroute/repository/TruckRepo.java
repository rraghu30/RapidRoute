package com.alpha.rapidroute.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alpha.rapidroute.entity.Truck;



@Repository
public interface TruckRepo extends JpaRepository<Truck, Integer> {

	Optional<Truck> findByTruckno(int tno);

	List<Truck> findByCarrierId(int id);

}
