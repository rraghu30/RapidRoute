package com.alpha.rapidroute.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alpha.rapidroute.entity.Order;

@Repository
public interface OrderRepo extends JpaRepository<Order, Integer> {

}
