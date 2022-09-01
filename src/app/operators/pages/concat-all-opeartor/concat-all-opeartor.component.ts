import { Component, OnInit } from '@angular/core';
import { concatAll, interval, map, of, take } from 'rxjs';

@Component({
  selector: 'app-concat-all-opeartor',
  templateUrl: './concat-all-opeartor.component.html',
  styleUrls: ['./concat-all-opeartor.component.scss']
})
export class ConcatAllOpeartorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let source$ = of(2,4,10);
   
    source$
    .pipe(map(value=>interval(100).pipe(take(value))),concatAll())
    .subscribe((data)=>console.log(data));
  }

}
