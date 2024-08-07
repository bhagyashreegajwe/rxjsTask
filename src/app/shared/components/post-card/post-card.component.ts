import { Component, Input, OnInit } from '@angular/core';
import { Iposts } from '../../models/post.interface';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() postData! : Iposts
  constructor() { }

  ngOnInit(): void {
  }

}
