import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { skipLast, take, tap, } from 'rxjs/operators';

@Component({
  selector: 'app-skip-last-operator',
  templateUrl: './skip-last-operator.component.html',
  styleUrls: ['./skip-last-operator.component.scss']
})
export class SkipLastOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // interval(500).pipe(take(10),skipLast(3))
   
  // of(1,2,3,4,5).pipe(skipLast(2))
   interval(500).pipe(tap((data)=>{console.log(data);
   }),skipLast(10))
    
   .subscribe((data) => {
     console.log(data);

   }, (error) => {
     console.log('error' + error);

   }, () => {
     console.log('complete');

   })
  }

}
