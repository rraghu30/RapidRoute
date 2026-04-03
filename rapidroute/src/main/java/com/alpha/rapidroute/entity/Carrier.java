package com.alpha.rapidroute.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Carrier {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String cname;
	private String mail;
	private long contactno;
	
	
	
	@ManyToOne
	@JoinColumn(name = "truck_id")
	@JsonBackReference
	private Truck truck; 

	public Carrier(String cname, String mail, long contactno, Truck truck) {
		super();
		this.cname = cname;
		this.mail = mail;
		this.contactno = contactno;
		this.truck=truck;
		
	}
	
	public Truck getTruck() {
		return truck;
	}

	public void setTruck(Truck truck) {
		this.truck = truck;
	}

	

	public Carrier() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCname() {
		return cname;
	}

	public void setCname(String cname) {
		this.cname = cname;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public long getContactno() {
		return contactno;
	}

	public void setContactno(long contactno) {
		this.contactno = contactno;
	}

	@Override
	public String toString() {
		return "Carrier [id=" + id + ", cname=" + cname + ", mail=" + mail + ", contactno=" + contactno + "]";
	}

	

	
	
	

}
