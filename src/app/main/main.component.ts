import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {ApiToGetLatAndLongService} from '../../app/api-to-get-lat-and-long.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  lat: number = 20.593684;
  lng: number = 78.96288;
  zoom: number = 5;

  selectedCity = new String("India");

  getSelectedCity(selectedCity : String){
    if(selectedCity){
      this.selectedCity = selectedCity;
      console.log(this.selectedCity);
      this.getMap(this.selectedCity);
    }
    {
      this.selectedCity='India';
    }
    
  }

  constructor(private apiToGetLatAndLongService: ApiToGetLatAndLongService) {
  } 

 ngOnInit() {
   this.apiToGetLatAndLongService.get(this.selectedCity).subscribe((data)=>{  
     console.log(data['results'][0].geometry.location); 
     //console.log("rishi");
   })
 }

 getMap(selectedCity : String){
   console.log(selectedCity);
  this.apiToGetLatAndLongService.get(selectedCity+',IN').subscribe((data)=>{  
    console.log(data['results'][0].geometry.location);
    this.lat = data['results'][0].geometry.location.lat;
    this.lng = data['results'][0].geometry.location.lng; 
    //console.log("rishi");
  })
 }

  
}
