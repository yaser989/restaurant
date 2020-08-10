import { Component, OnInit } from '@angular/core';
import { RestaurentService } from 'src/app/services/restaurent.service';
import { Restau } from 'src/app/restau';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.css']
})
export class SpecialiteComponent implements OnInit {

  
  constructor(private serviceRestau: RestaurentService, private route : ActivatedRoute) { }
 public listRestau : Restau[];
 specialite : String;
 
  ngOnInit() {
    this.getrestaurentByspecialite2();
    this.specialite=this.route.snapshot.params.specialite;
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
  
  getrestaurentByspecialite2(){
    this.serviceRestau.getrestaurentByspecialite2().subscribe(data => {
      this.listRestau = data;
      console.log(this.listRestau);
    })
  
  }

 
}
