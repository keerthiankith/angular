import { Component, OnInit } from '@angular/core';
import {ConnectserviceService} from '../connectservice.service';

@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
      
  styleUrls: ['./login.component.css'],
  providers:[ConnectserviceService]
})
export class LoginComponent implements OnInit {
 
  constructor(private service:ConnectserviceService) { }

  ngOnInit() {
  }
  submit(f){
    console.log(f);
    let data =f.value;
    this.service.postLoginData(data);
  }

}
