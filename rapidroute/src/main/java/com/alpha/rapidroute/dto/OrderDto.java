package com.alpha.rapidroute.dto;

import com.alpha.rapidroute.entity.Unloading;

public class OrderDto {
	
	private String cargoname;
	private String cargodescription;
	private double cargoweigth;
	private int cargocount;
	private String loadingaddress;
	private String unloadingaddress;
	
	public OrderDto(String cargoname, String cargodescription, double cargoweigth, int cargocount,
			String loadingaddress, String unloadingaddress) {
		super();
		this.cargoname = cargoname;
		this.cargodescription = cargodescription;
		this.cargoweigth = cargoweigth;
		this.cargocount = cargocount;
		this.loadingaddress = loadingaddress;
		this.unloadingaddress = unloadingaddress;
	}

	public OrderDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getCargoname() {
		return cargoname;
	}

	public void setCargoname(String cargoname) {
		this.cargoname = cargoname;
	}

	public String getCargodescription() {
		return cargodescription;
	}

	public void setCargodescription(String cargodescription) {
		this.cargodescription = cargodescription;
	}

	public double getCargoweigth() {
		return cargoweigth;
	}

	public void setCargoweigth(double cargoweigth) {
		this.cargoweigth = cargoweigth;
	}

	public int getCargocount() {
		return cargocount;
	}

	public void setCargocount(int cargocount) {
		this.cargocount = cargocount;
	}

	public String getLoadingaddress() {
		return loadingaddress;
	}

	public void setLoadingaddress(String loadingaddress) {
		this.loadingaddress = loadingaddress;
	}

	public String getUnloadingaddress() {
		return unloadingaddress;
	}

	public void setUnloadingaddress(String unloadingaddress) {
		this.unloadingaddress = unloadingaddress;
	}

	@Override
	public String toString() {
		return "OrderDto [cargoname=" + cargoname + ", cargodescription=" + cargodescription + ", cargoweigth="
				+ cargoweigth + ", cargocount=" + cargocount + ", loadingaddress=" + loadingaddress
				+ ", unloadingaddress=" + unloadingaddress + "]";
	}
	
	
	
	

}
