import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable'

import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/catch';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private url: string, private http: Http) { }

  getAll() {
    return this.http.get(this.url)
                    .map(response => response.json())
                    .catch(this.handleError); 
  }

  create(resource) {
    return this.http.post(this.url, resource)
                    .catch(this.handleError);  
  }

  update(resource) {
    return this.http.put(this.url+'/'+resource.id, resource)
                    .catch(this.handleError);  
  }

  delete(resource) {
    return this.http.delete(this.url+'/'+resource.id)
                    .catch(this.handleError);
  }

  private handleError(error: Response) {
    if(error.status === 404){
      return Observable.throw(new NotFoundError);
    }

    if(error.status === 400){
      return Observable.throw(new BadInput);
    }

    return Observable.throw(new AppError);
  }

}
