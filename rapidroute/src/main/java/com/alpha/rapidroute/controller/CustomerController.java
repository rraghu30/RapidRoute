package com.alpha.rapidroute.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.alpha.rapidroute.dto.OrderDto;
import com.alpha.rapidroute.service.OrderService;

@RestController
@RequestMapping("/customer")
public class CustomerController {
	
	@Autowired
	private OrderService orderserive;
	
	@PostMapping("/placeorder")
	public void placeOrder(@RequestBody OrderDto odto) {
		
		orderserive.placeOrder(odto);
	}
	
	//1
	// cancle order request
	// cutomer can cancle the order only if order is placed and not yet loaded 
	// or throw the exception
	
	@PatchMapping("/cancelorder")
	public String cancelOrder(@RequestParam int orderId) {
		return orderserive.cancelOrder(orderId);
	}
	
	
	
	
	
	// 2
	// return the order 
	// if order is loaded then have to return the order 
	// to return the place new order with exactly opposit loading and unloading 
	// dont take user input . get the data from existing order to place return order .
	
	@PatchMapping("/returnorder")
	public String returnOrder(@RequestParam int orderId) {
		return orderserive.returnOrder(orderId);
	}
	
	

}
