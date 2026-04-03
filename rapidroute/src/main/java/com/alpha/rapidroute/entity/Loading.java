package com.alpha.rapidroute.entity;

import java.sql.Time;
import java.util.Date;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class Loading {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private Date ldate;
	private Time ltime;
	
	@OneToOne(cascade = CascadeType.PERSIST)
	private Address address;
	


	public Loading(Date ldate, Time ltime, Address address) {
		super();
		this.ldate = ldate;
		this.ltime = ltime;
		this.address = address;
		
	}

	public Loading() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getLdate() {
		return ldate;
	}

	public void setLdate(Date ldate) {
		this.ldate = ldate;
	}

	public Time getLtime() {
		return ltime;
	}

	public void setLtime(Time ltime) {
		this.ltime = ltime;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	@Override
	public String toString() {
		return "Loading [id=" + id + ", ldate=" + ldate + ", ltime=" + ltime + ", address=" + address + "]";
	}


	
	
	

}
