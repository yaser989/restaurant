import { Component, OnInit, ElementRef } from '@angular/core';
import { Restau } from 'src/app/restau';
import { RestaurentService } from 'src/app/services/restaurent.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  
  
  constructor(private serviceRestau: RestaurentService,private router : Router) { }
  listRestau$ : Observable<Restau[]>;
   

  ngOnInit() {
    this.getAllRestau();
    

  }

  getAllRestau(){
    this.listRestau$ = this.serviceRestau.getAllRestaurent();
  }


  public  check : boolean ;
 nameButton : String = "see more";
  myClick  ()  { 
    this.check =! this.check;
    if (this.check){
      this.nameButton = "show less";
    }
else{
  this.nameButton = "see more";
}

  }
  
  specialite(specialite : String){
 this.router.navigate(['/specialite',specialite]);
  }

}
