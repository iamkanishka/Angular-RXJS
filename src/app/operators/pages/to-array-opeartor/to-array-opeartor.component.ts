import { Component, OnInit } from '@angular/core';
import { of, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array-opeartor',
  templateUrl: './to-array-opeartor.component.html',
  styleUrls: ['./to-array-opeartor.component.scss']
})
export class ToArrayOpeartorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let source$ = of(5,10,15,18,20);
   
    source$
    .pipe(take(3),toArray())
    .subscribe((data)=>console.log(data));
  }

}
