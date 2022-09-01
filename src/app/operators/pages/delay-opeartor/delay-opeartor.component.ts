import { Component, OnInit } from '@angular/core';
import { concatMap, delay, of } from 'rxjs';

@Component({
  selector: 'app-delay-opeartor',
  templateUrl: './delay-opeartor.component.html',
  styleUrls: ['./delay-opeartor.component.scss']
})
export class DelayOpeartorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let source$ = of(5,10,15,18,20);
   
    source$
//    .pipe(delay(2000))
    .pipe(concatMap((value)=>of(value).pipe(delay(2000))))

    .subscribe((data)=>console.log(data));

  }

}
