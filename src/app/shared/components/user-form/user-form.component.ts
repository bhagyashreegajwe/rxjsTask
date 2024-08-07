import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @ViewChild('username') username !: ElementRef<any>
  constructor(
    private _userService : UserService
  ) { }

  ngOnInit(): void {
  }

  addUserName(){
    let val = this.username?.nativeElement.value as string
    this.username.nativeElement.value = ''
    this._userService.userSub$.next(val)
  }

}
