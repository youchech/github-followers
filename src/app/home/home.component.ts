import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  ajouter(){
    this.route.navigate(['followers', 12, 'youssef'], {
      queryParams: { page: 12, type: 'admin' }
    })
  }

}
