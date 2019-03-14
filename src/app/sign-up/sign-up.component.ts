import { Component, OnInit } from '@angular/core';
import { Email } from '../email';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignupComponent implements OnInit {

	email : Email = {
		email : 'nomprenom@email.com',
		};

  constructor() { }

  ngOnInit() {
  }

}
