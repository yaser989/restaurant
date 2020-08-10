package org.openup.Controller;

import java.util.List;
import java.util.Optional;

import javax.activity.InvalidActivityException;

import org.openup.Entity.restaurent;
import org.openup.Repo.restaurentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/restau")
@CrossOrigin(origins="*")
public class restaurentController {

	@Autowired
	restaurentRepository restaurentRepo;
	
	@GetMapping
	public ResponseEntity <List<restaurent>> getAll(){
		List<restaurent> restau = restaurentRepo.findAll();
		return ResponseEntity.ok(restau);
		
	}
	
	@GetMapping("/specialite1")
	public List<restaurent> getRestaurent()  {
		return restaurentRepo.findBySpecialite1("Asiatique");
	}
	
	@GetMapping("/specialite1={specialite1}")
	public List<restaurent> getRestaurent(@PathVariable ("specialite1")String specialite1)  {
		return restaurentRepo.findBySpecialite1(specialite1);
	}

}
