package org.openup.Repo;

import java.util.List;

import org.openup.Entity.restaurent;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface restaurentRepository extends MongoRepository<restaurent, String> {

	//@Query("{'specialite2':?0}")
	List<restaurent> findBySpecialite1 (String specialite1);
	
	
}
