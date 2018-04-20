import { Component, OnInit } from '@angular/core';

import { Subscriber } from 'rxjs/Subscriber';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[] = [];

  status = true;
  post = {
    id: 0,
    title: '',
    body: '',
    userId: ''
  };
  constructor(private postService: PostService) {
    
   }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(){
    this.postService.getAll()
    .subscribe(
      //console.log(response.json())
      posts => this.posts = posts,
      error => {      
        alert('erreur inatendue !!');
      }
    )
  }

  createPost(post){
    this.postService.create(this.post)
    .subscribe(newPost => {
      this.post.id = newPost.id;
      this.posts.unshift(this.post);
      this.post = {
        id: 0,
        title: '',
        body: '',
        userId: ''
      }
    },(error: AppError) => {
      if(error instanceof BadInput){
        alert('merci de vérifié vos informations !!')
      } else {
        alert('erreur inatendue !!');
      }
    })
  }

  editPost(post){
    this.post = post;
    this.status = false;
  }

  updatePost(){
    this.postService.update(this.post)
    .subscribe( () => {
      this.post = {
        id: 0,
        title: '',
        body: '',
        userId: ''
      }
      this.status = true;
    })
  }

  deletePost(post){
    this.postService.delete(post)
    .subscribe(
      () => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    },(error: AppError) => {
      if(error instanceof NotFoundError){
        alert('ce post est déjà supprimé !!')
      } else {
        alert('erreur inatendue !!');
      }
    })
  }

}
