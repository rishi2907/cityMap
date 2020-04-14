import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiToGetLatAndLongService {

  private SERVER_URL_START = "https://maps.googleapis.com/maps/api/geocode/json?address=";
  private SERVER_URL_END = "&key=AIzaSyDzCP5oMHWf1dNgcIdchURB1UP5t0mMt70";
  constructor(private httpClient: HttpClient) { }

  public get(city : String){ 
    let url = this.SERVER_URL_START+city+this.SERVER_URL_END;
    console.log(url);
		return this.httpClient.get(url);  
	}  
}
