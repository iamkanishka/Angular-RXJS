import { Component, OnInit } from '@angular/core';
import { last, of, reduce, scan } from 'rxjs';

@Component({
  selector: 'app-reduce-operator',
  templateUrl: './reduce-operator.component.html',
  styleUrls: ['./reduce-operator.component.scss']
})
export class ReduceOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let source$ = of(1,2,3,5,6,7,6,5);

    source$
    .pipe(scan((acc,val)=>{
      console.log('accumulator',acc);
      console.log('value',val);

      
      return acc+val;
    }),last())
    .subscribe((data)=>{
      console.log(data);
      
    })

    source$
    .pipe(reduce((acc,val)=>{
      console.log('accumulator',acc);
      console.log('value',val);

      
      return acc+val;
    },0))
    .subscribe((data)=>{
      console.log(data);
      
    })
  }

}
