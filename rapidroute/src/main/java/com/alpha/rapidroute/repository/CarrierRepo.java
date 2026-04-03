package com.alpha.rapidroute.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alpha.rapidroute.entity.Carrier;
import com.alpha.rapidroute.entity.Truck;

@Repository
public interface CarrierRepo extends JpaRepository<Carrier, Integer> {

	Optional<Carrier> findByContactno(long contactno);

}
