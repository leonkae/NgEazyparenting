import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Comment } from './models/Comments';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  url: string = environment.COMMENT_URL;
  private messageSource: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public message = this.messageSource.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  headers = new HttpHeaders().set(
    'Content-Type',
    'application/x-www-form-urlencoded;'
  );

  postComment(comment: any): Observable<Comment> {
    return this.http.post<Comment>(`${this.url}`, comment);
  }

  getComment(comment: any): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.url}`);
  }
}

