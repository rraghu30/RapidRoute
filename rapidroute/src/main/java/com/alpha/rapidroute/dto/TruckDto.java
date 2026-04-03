package com.alpha.rapidroute.dto;

import java.util.List;

import com.alpha.rapidroute.entity.Carrier;

import jakarta.persistence.Column;

public class TruckDto {
	
	private String truckname;
	@Column(unique = true)
	private int truckno;
	private long capacity;
	private String status;
	
	//carrier list
	private List<Carrier> carrier;
	
	
	public List<Carrier> getCarrier() {
		return carrier;
	}
	public void setCarrier(List<Carrier> carrier) {
		this.carrier = carrier;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getTruckname() {
		return truckname;
	}
	public void setTruckname(String truckname) {
		this.truckname = truckname;
	}
	public int getTruckno() {
		return truckno;
	}
	public void setTruckno(int truckno) {
		this.truckno = truckno;
	}
	public long getCapacity() {
		return capacity;
	}
	public void setCapacity(long capacity) {
		this.capacity = capacity;
	}
	public TruckDto(String truckname, int truckno, long capacity) {
		super();
		this.truckname = truckname;
		this.truckno = truckno;
		this.capacity = capacity;
	}
	public TruckDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "TruckDto [truckname=" + truckname + ", truckno=" + truckno + ", capacity=" + capacity + "]";
	}
	
	
	
	

}
