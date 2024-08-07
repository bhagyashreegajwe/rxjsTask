import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-consumer2',
  templateUrl: './consumer2.component.html',
  styleUrls: ['./consumer2.component.scss']
})
export class Consumer2Component implements OnInit {
  userName !: string
  constructor(
    private _userService : UserService
  ) { }

  ngOnInit(): void {
    this._userService.userSub$.subscribe(value => this.userName = value)
  }

}
