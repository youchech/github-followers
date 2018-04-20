import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html'
})

export class CoursesComponent {

    course = {
        titre: 'Formation Angular',
        avis: '1.9762',
        participants: 136,
        prix: 950.38,
        publicationDate: new Date()
    }

    isActive = true;
    title = "la liste de mes cours";
    image = "data:image/png;base64,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";
    courses;
    email: string = "me@email.com";

    onKeyUp(){       
        alert(this.email);       
    }

    onClick(){
        //$event.stopPropagation();
        //console.log('toootto');
        
        if(this.isActive == true) this.isActive = false;
        else this.isActive = true;
    }
    onClickDiv(){
        //console.log('div', $event);
    }

    constructor(coursesService: CoursesService) {
        this.courses = coursesService.getCourses();
    }

    getTitle() {
        return this.title;
    }
}