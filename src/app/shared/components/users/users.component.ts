import { Component, OnInit } from '@angular/core';
import { OfService } from '../../service/of.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(
    private _ofService : OfService
  ) { }

  ngOnInit(): void {
    this._ofService.of$.subscribe(num => {
        console.log(num)
      }
    )

    this._ofService.mapSkills$.subscribe(
      skill => console.log(skill)
    )

    this._ofService.beforeAfterTapSkills$.subscribe(
      skill => console.log(skill)
    )
  }

}
