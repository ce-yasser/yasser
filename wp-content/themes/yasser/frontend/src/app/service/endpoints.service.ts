import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  constructor(private http: HttpClient) { }

  getPosts(params: any): Observable<any> {
    return this.http.get(`${environment.apiUrl}/posts/`, {params: params})
  }

}
