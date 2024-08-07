import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-consumer1',
  templateUrl: './consumer1.component.html',
  styleUrls: ['./consumer1.component.scss']
})
export class Consumer1Component implements OnInit {
  userName !: string
  constructor(
    private _userService : UserService
  ) { }

  ngOnInit(): void {
    this._userService.userSub$.subscribe(value => this.userName = value)
  }

}
