import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  ContactMethods = [
    { id:1, name:'email' },
    { id:2, name:'tel' }, 
    { id:3, name:'sms' }
  ]
  constructor() { }

  ngOnInit() {
  }


  submit(f){
    console.log(f.value.contact.firstname);
  }

}
