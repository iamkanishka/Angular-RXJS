import { Component, OnInit } from '@angular/core';

import { of, count } from 'rxjs';

@Component({
  selector: 'app-count-operator',
  templateUrl: './count-operator.component.html',
  styleUrls: ['./count-operator.component.scss']
})
export class CountOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   let source$ = of(1,2,3,4,5,6,7,8,9);
   
   source$
   .pipe(count((val,index)=>val%2===0))
   .subscribe((data)=>console.log(data));
  }

}
