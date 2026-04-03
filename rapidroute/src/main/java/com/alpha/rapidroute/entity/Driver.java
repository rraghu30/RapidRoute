package com.alpha.rapidroute.entity;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Driver {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String dname;
	private long contactno;
	
	@ManyToOne
	private Carrier carrier;
	
	@ManyToOne
	private Truck truck;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return dname;
	}

	public void setName(String name) {
		this.dname = name;
	}

	public long getContactno() {
		return contactno;
	}

	public void setContactno(long contactno) {
		this.contactno = contactno;
	}

	public Carrier getCarrier() {
		return carrier;
	}

	public void setCarrier(Carrier carrier) {
		this.carrier = carrier;
	}

	public Truck getTruck() {
		return truck;
	}

	public void setTruck(Truck truck) {
		this.truck = truck;
	}

	public Driver(String name, long contactno, Carrier carrier, Truck truck) {
		this.dname = name;
		this.contactno = contactno;
		this.carrier = carrier;
		this.truck = truck;
	}

	public Driver() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Driver [id=" + id + ", name=" + dname + ", contactno=" + contactno + ", carrier=" + carrier + ", truck="
				+ truck + "]";
	}
	
	

}
