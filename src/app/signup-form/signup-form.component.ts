import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameVaidator } from './username.validator'
@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameVaidator.connotContainSpace
    ]),
    password: new FormControl('', Validators.required)
  })

  get username(){
    return this.form.get('uesrname');
  }
  get password(){
    return this.form.get('password');
  }


}
