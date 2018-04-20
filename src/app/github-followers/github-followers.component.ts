import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers: any[] = [];

  constructor(private serviceGithub: GithubFollowersService) { }

  ngOnInit() {

    this.serviceGithub.getAll()
    .subscribe(
      //console.log(response.json())
      followers => this.followers = followers
    )
  }
   

}
