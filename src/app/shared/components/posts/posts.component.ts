import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../service/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  Iposts : any
  constructor(
    private _postService : PostsService
  ) { }

  ngOnInit(): void {
    this._postService.fetchAllPosts().subscribe(posts => {
      this.Iposts = posts
    })
  } 
}
