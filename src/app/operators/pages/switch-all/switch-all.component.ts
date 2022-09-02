import { Component, OnInit } from '@angular/core';
import { interval, map, switchAll, take } from 'rxjs';

@Component({
  selector: 'app-switch-all',
  templateUrl: './switch-all.component.html',
  styleUrls: ['./switch-all.component.scss']
})
export class SwitchAllComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let source$ = interval(500).pipe(take(5))
    source$.
    pipe(map(value=>interval(1000).pipe( map(val=>`parent interval value ${value} with child inteval value ${val}`
    )  ,take(5))),switchAll())
    .subscribe((data)=>{
      console.log(data);
      
    })
  }

}
