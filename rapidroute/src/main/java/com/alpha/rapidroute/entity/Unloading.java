package com.alpha.rapidroute.entity;

import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

@Entity
public class Unloading {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private LocalDate udate;
	private LocalTime utime;
	
	@OneToOne(cascade = CascadeType.PERSIST)
	private Address address;


	public Unloading(LocalDate udate, LocalTime utime, Address address) {
		super();
		this.udate = udate;
		this.utime = utime;
		this.address = address;
		
	}

	public Unloading() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public LocalDate getUdate() {
		return udate;
	}

	public void setUdate(LocalDate localDate) {
		this.udate = localDate;
	}

	public LocalTime getUtime() {
		return utime;
	}

	public void setUtime(LocalTime utime) {
		this.utime = utime;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	@Override
	public String toString() {
		return "Unloading [id=" + id + ", udate=" + udate + ", utime=" + utime + ", address=" + address + "]";
	}

	

	
	
	
}
