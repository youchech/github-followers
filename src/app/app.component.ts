import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cours;
  
  loadCourses(){
    this.cours = [
      {id:1, title:"Laravel"},
      {id:2, title:"Angular"},
      {id:3, title:"VueJS"},
      {id:4, title:"Symfony"},
      {id:5, title:"AdnisJS"},
    ]; 
  }
  trackCourse(index, course){
    return course ? course.id : undefined;
  }
  addCourse(){
    this.cours.push({id:6, title:"ReactJS"});
  }
  removeCourse(course){
    let index = this.cours.indexOf(course);
    this.cours.splice(index, 1);
  }
  editCourse(course){
    course.title = "updated";
  }

  viewCourse = "Angular"

  courses = ['Laravel','Angular','Symfony']

  title = 'app';
  body  = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut est iure accusamus perferendis! Perferendis, fuga. Itaque numquam libero sed quo.';
  post = {
    title: "lorem ..",
    isFavorite: true
  }
  onFavoriteChanged(args){
    console.log('favvvorite - ',args);
  }
}
