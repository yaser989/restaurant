import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restau } from 'src/app/restau';
import { RestaurentService } from 'src/app/services/restaurent.service';

@Component({
  selector: 'app-specialite-cuisine',
  templateUrl: './specialite-cuisine.component.html',
  styleUrls: ['./specialite-cuisine.component.css']
})
export class SpecialiteCuisineComponent implements OnInit {
  specialite: string;
  restaus : Restau[];
  constructor(private route: ActivatedRoute, private restauServic : RestaurentService) { }

  ngOnInit() {
    this.specialite=this.route.snapshot.params.specialite;
    this.restauServic.getrestaurentByspecialite(this.specialite).subscribe(res => {
      this.restaus = res;
    })
 
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

}
