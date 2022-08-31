import { Component, OnInit } from '@angular/core';
import { every, of } from 'rxjs';

@Component({
  selector: 'app-every-operator',
  templateUrl: './every-operator.component.html',
  styleUrls: ['./every-operator.component.scss']
})
export class EveryOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let source$ = of(5,10,15,18,20);
   
    source$
    .pipe(every((val)=>val%5===0))
    .subscribe((data)=>console.log(data));

    // source$
    // .pipe(first((val)=>val>20))
    // .subscribe((data)=>console.log(data));
  }

}
