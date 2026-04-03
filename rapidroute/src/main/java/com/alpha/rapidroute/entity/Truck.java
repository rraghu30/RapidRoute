package com.alpha.rapidroute.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Truck {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String tname;
	private long truckno;
	private long capacity;
	private String status;
	
	@OneToMany(mappedBy = "truck", cascade = CascadeType.ALL)
	@JsonManagedReference
	private List<Carrier> carrier;

	public Truck(int id, String tname, long truckno, long capacity, String status, List<Carrier> carrier) {
		super();
		this.id = id;
		this.tname = tname;
		this.truckno = truckno;
		this.capacity = capacity;
		this.status = status;
		this.carrier = carrier;
	}

	public Truck() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTname() {
		return tname;
	}

	public void setTname(String tname) {
		this.tname = tname;
	}

	public long getTruckno() {
		return truckno;
	}

	public void setTruckno(long truckno) {
		this.truckno = truckno;
	}

	public long getCapacity() {
		return capacity;
	}

	public void setCapacity(long capacity) {
		this.capacity = capacity;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	 

	public List<Carrier> getCarrier() {
		return carrier;
	}

	public void setCarrier(List<Carrier> carrier) {
		this.carrier = carrier;
	}

	@Override
	public String toString() {
		return "Truck [id=" + id + ", tname=" + tname + ", truckno=" + truckno + ", capacity=" + capacity + ", status="
				+ status + ", carrier=" + carrier + "]";
	}

	
	

}