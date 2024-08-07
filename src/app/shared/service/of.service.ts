import { Injectable } from '@angular/core';
import { filter, interval, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfService {
  of$ = of(12, 34, 45, 65, 78, 9, 44, 80)
    .pipe(
      filter((num: number) => {
        return num % 2 === 0
      })
    )



  mapSkills$ = of("HTML", "CSS", "Javascript", "Typescript", "Angular", "NodeJs")
    .pipe(
      map(
        skills => {
          return `I Love ${skills}`
        }
      )
    )

  beforeAfterTapSkills$ = of("HTML", "CSS")
    .pipe(
      tap(skills => {
        console.log(`Before : ${skills}`);
      }),
      map(
        skills => {
          return `I Love ${skills}`
        }
      ),
      tap(skills => {
        console.log(`After : ${skills}`);
      }),
    )

    customInterval$ = new Observable(cust => {
      let count = 0;
      setInterval(()=>{
        cust.next(count)
        count++;

        if(count > 15){
          cust.error('Invalid number error')
        }
      }, 1000)
    })


  constructor() { }
}
