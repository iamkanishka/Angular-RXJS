import { Component, OnInit } from '@angular/core';
import { findIndex, first, of } from 'rxjs';

@Component({
  selector: 'app-find-index-operator',
  templateUrl: './find-index-operator.component.html',
  styleUrls: ['./find-index-operator.component.scss']
})
export class FindIndexOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let source$ = of(121,1,2,3,4,5,6,7,8,9);
   
    source$
    .pipe(findIndex((val)=>val>=20))
    .subscribe((data)=>console.log(data));

    source$
    .pipe(first((val)=>val>=200))
    .subscribe((data)=>console.log(data));
  }

}
