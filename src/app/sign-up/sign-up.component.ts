import { Component, OnInit } from '@angular/core';
import { Email } from '../email';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignupComponent implements OnInit {



  model: Signup = new Signup();
  constructor() { }
  onSubmit() {
    console.log(this.model);
  }
  ngOnInit() {
  }

}
export class Signup {
  user: string;
  email: string;
}




