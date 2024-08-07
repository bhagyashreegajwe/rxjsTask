import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-consumer3',
  templateUrl: './consumer3.component.html',
  styleUrls: ['./consumer3.component.scss']
})
export class Consumer3Component implements OnInit {
  userName !: string
  constructor(
    private _userService : UserService
  ) { }

  ngOnInit(): void {
    this._userService.userSub$.subscribe(value => this.userName = value)
  }
}
