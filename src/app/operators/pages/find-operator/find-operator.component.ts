import { Component, OnInit } from '@angular/core';
import { find, first, of } from 'rxjs';

@Component({
  selector: 'app-find-operator',
  templateUrl: './find-operator.component.html',
  styleUrls: ['./find-operator.component.scss']
})
export class FindOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let source$ = of(1,2,3,4,5,6,7,8,9,20);
   
    source$
    .pipe(find((val)=>val>20))
    .subscribe((data)=>console.log(data));

    source$
    .pipe(first((val)=>val>20))
    .subscribe((data)=>console.log(data));
  }

}
