package com.alpha.rapidroute.entity;


import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="Orders")
public class Order {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private LocalDate orderdate;
	private String status;
	private Double cost;
	private LocalTime ordertime;
	
	@ManyToOne(cascade = CascadeType.ALL) //(mappedBy = "order", cascade = CascadeType.ALL) -->use here also but i write logic in service layer
	private Carrier carrier;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Loading loading;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Cargo cargo;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Unloading unloading;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	

	public LocalDate getOrderdate() {
		return orderdate;
	}

	public void setOrderdate(LocalDate orderdate) {
		this.orderdate = orderdate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Double getCost() {
		return cost;
	}

	public void setCost(Double cost) {
		this.cost = cost;
	}

	public Carrier getCarrier() {
		return carrier;
	}

	public void setCarrier(Carrier carrier) {
		this.carrier = carrier;
	}

	public Loading getLoading() {
		return loading;
	}

	public void setLoading(Loading address) {
		this.loading = address;
	}

	public Cargo getCargo() {
		return cargo;
	}

	public void setCargo(Cargo cargo) {
		this.cargo = cargo;
	}

	public Unloading getUnloading() {
		return unloading;
	}

	public void setUnloading(Unloading unloading) {
		this.unloading = unloading;
	}
	
	

	public LocalTime getOrdertime() {
		return ordertime;
	}

	public void setOrdertime(LocalTime ordertime) {
		this.ordertime = ordertime;
	}

	public Order(int id, LocalDate orderdate, String status, Double cost, Carrier carrier, Loading loading, Cargo cargo,
			Unloading unloading) {
		super();
		this.id = id;
		this.orderdate = orderdate;
		this.status = status;
		this.cost = cost;
		this.carrier = carrier;
		this.loading = loading;
		this.cargo = cargo;
		this.unloading = unloading;
	}

	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Order [id=" + id + ", orderdate=" + orderdate + ", status=" + status + ", cost=" + cost + ", carrier="
				+ carrier + ", loading=" + loading + ", cargo=" + cargo + ", unloading=" + unloading + "]";
	}
	
	
	
	
}

