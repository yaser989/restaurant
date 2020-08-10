import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restau } from '../restau';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurentService {

 
  constructor(private Http:HttpClient) { }
  public baseUrl ='http://localhost:8080/restau';

  getAllRestaurent (){
    return this.Http.get<Restau[]>(this.baseUrl);
  }
  getrestaurentByspecialite2() {
return this.Http.get<Restau[]>(`${this.baseUrl}/specialite1`);

  }
   getrestaurentByspecialite(specialite1 : String) : Observable<Restau[]>{
    return this.Http.get<Restau[]>(`${this.baseUrl}/specialite1=${specialite1}`);
    
      }
}
