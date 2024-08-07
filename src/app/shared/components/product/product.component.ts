import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { OfService } from '../../service/of.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  interval$ = interval(1000)
  intervalSubscript !: Subscription
  constructor(
    private _ofService : OfService
  ) { }

  ngOnInit(): void {
    this.intervalSubscript = this.interval$.subscribe(res => {
      console.log(res)
    })

    // this._ofService.of$.subscribe( num => {
    //   console.log(num)
    // })
  }

  ngOnDestroy() : void {
    this.intervalSubscript.unsubscribe()
  }
}
