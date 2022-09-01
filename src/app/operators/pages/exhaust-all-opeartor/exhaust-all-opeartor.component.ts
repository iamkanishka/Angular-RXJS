import { Component, OnInit } from '@angular/core';
import { exhaustAll, filter, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-exhaust-all-opeartor',
  templateUrl: './exhaust-all-opeartor.component.html',
  styleUrls: ['./exhaust-all-opeartor.component.scss']
})
export class ExhaustAllOpeartorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let source$ = interval(1000).pipe(filter((value)=>value>0),take(4))
    source$.pipe(map((value)=>interval(500).pipe(map(val=>`parent Inteval ${value} with Child Interval ${val} `),take(value))),exhaustAll()).subscribe((data)=>{
      console.log(data);
      
    })
  }

}
