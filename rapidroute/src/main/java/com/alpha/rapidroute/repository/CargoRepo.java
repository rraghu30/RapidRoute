package com.alpha.rapidroute.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alpha.rapidroute.entity.Cargo;

@Repository
public interface CargoRepo extends JpaRepository<Cargo, Integer> {

}
