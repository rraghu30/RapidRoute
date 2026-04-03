package com.alpha.rapidroute.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alpha.rapidroute.entity.Address;

@Repository
public interface AddressRepo extends JpaRepository<Address, Integer>{

	Optional<Address> findByCity(String loadingaddress);


}
