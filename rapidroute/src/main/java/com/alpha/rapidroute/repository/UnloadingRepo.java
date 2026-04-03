package com.alpha.rapidroute.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alpha.rapidroute.entity.Unloading;

@Repository
public interface UnloadingRepo extends JpaRepository<Unloading, Integer> {

}
