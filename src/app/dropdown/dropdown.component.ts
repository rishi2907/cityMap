import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
import {ApiService} from '../../app/api.service'

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Output() outputCityName = new EventEmitter<String>();

  cityToParentComponent(SelectedCity : String){
    this.outputCityName.emit(SelectedCity);
  }

  aMap = {};
  distinctstate = new Set(); 
  state = [];
  Selectedstate = 'Rajasthan';
  SelectedCity ; 
  
  cities = [];

  constructor(private apiService: ApiService) {
   } 

  ngOnInit() {
    this.apiService.get().subscribe((data: any[])=>{  
      console.log(data); 
      for(let i = 0 ;i<data.length;i++){
        this.addValueToKey(data[i].State,data[i].City);
        this.distinctstate.add(data[i].State);
      }  
      for (let it = this.distinctstate.values(), val= null; val=it.next().value; ) {
        // let temp = {value : val , ValName :val.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'')};
        // this.state.push(temp);
        this.state.push(val);
    }
      console.log(this.state[0].value);
      console.log(this.aMap);
      this.cities = this.aMap[this.Selectedstate];
		})
  }
  
  changeCity(){
    this.cities = this.aMap[this.Selectedstate];
  }

  addValueToKey(key, value) : void {
    this.aMap[key] = this.aMap[key] || [];
    this.aMap[key].push(value);
  }

}
