import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { EmailService } from './email.service';
import { ResumePipe } from './resume.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './services/github-followers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ProfileFollowerComponent } from './profile-follower/profile-follower.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    ResumePipe,
    FavoriteComponent,
    PanelComponent,
    ContactFormComponent,
    SignupFormComponent,
    PostsComponent,
    GithubFollowersComponent,
    PageNotFoundComponent,
    HomeComponent,
    ProfileFollowerComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [CoursesService, EmailService, PostService, GithubFollowersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
