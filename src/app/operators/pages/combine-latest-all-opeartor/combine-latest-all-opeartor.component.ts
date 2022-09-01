import { Component, OnInit } from '@angular/core';
import { combineLatestAll, interval, map, of, take } from 'rxjs';

@Component({
  selector: 'app-combine-latest-all-opeartor',
  templateUrl: './combine-latest-all-opeartor.component.html',
  styleUrls: ['./combine-latest-all-opeartor.component.scss']
})
export class CombineLatestAllOpeartorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let source$ = of(5,10,15,18,20);
   
    source$
    .pipe(map((value)=>{
      return interval(1000).pipe(take(4))
    }), combineLatestAll())
    .subscribe((data)=>console.log(data));
  }

}
