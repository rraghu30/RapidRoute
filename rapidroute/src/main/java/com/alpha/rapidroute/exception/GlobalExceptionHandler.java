package com.alpha.rapidroute.exception;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.alpha.rapidroute.dto.ResponseStructure;
import com.alpha.rapidroute.entity.Carrier;
import com.alpha.rapidroute.entity.Truck;

@RestControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler(CarrierNotFoundException.class)
	public ResponseEntity<ResponseStructure<Carrier>> HandleEmployeeNotFoundException() {
		
		ResponseStructure<Carrier> rs=new ResponseStructure<Carrier>();
		rs.setStatuscode(HttpStatus.NOT_FOUND.value());
		rs.setMessage("Carrier Not Found");
        rs.setData(null);	
        
       return new ResponseEntity<ResponseStructure<Carrier>>(rs, HttpStatus.NOT_FOUND);
        
        //return rs;
	}
	
	@ExceptionHandler(TruckNotFoundException.class)
	public ResponseEntity<ResponseStructure<Truck>> handleTruckNotFoundException() {
		
		ResponseStructure<Truck> rs=new ResponseStructure<Truck>();
		rs.setStatuscode(HttpStatus.NOT_FOUND.value());
		rs.setMessage("Truck Not Found");
        rs.setData(null);	
        
        
        return new ResponseEntity<ResponseStructure<Truck>>(rs, HttpStatus.NOT_FOUND);
       
	}

}




