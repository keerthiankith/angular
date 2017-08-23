import { Component, OnInit } from '@angular/core';
import { ConnectserviceService } from '../connectservice.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[ConnectserviceService ]
})
export class SignupComponent implements OnInit {

  constructor(private service:ConnectserviceService ) { }

  ngOnInit() {
  }
  submit(f){
    console.log(f);
    let data = f.value;
    this.service.postdata(data);
  }
}
