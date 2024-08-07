import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Iposts } from '../models/post.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postUrl:string =`${environment.baseUrl}/posts`
  constructor(
    private http : HttpClient
  ) { }

  fetchAllPosts(): Observable<Iposts> {
    return this.http.get<Iposts>(this.postUrl)
  }
}
