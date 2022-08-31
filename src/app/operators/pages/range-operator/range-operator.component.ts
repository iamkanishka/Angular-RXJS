import { Component, OnInit } from '@angular/core';
import { asyncScheduler, range } from 'rxjs';

@Component({
  selector: 'app-range-operator',
  templateUrl: './range-operator.component.html',
  styleUrls: ['./range-operator.component.scss']
})
export class RangeOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    console.log('scriptiong start');
    
    let source$ = range(4,1000,asyncScheduler)
    source$.subscribe((data)=>{console.log(data);
    })
    console.log('scriptiong end');

  }

}
