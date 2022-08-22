import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { skip, take } from 'rxjs/operators';

@Component({
  selector: 'app-skip-operator',
  templateUrl: './skip-operator.component.html',
  styleUrls: ['./skip-operator.component.scss']
})
export class SkipOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //interval(500).pipe(take(10),skip(3))
    //interval(500).pipe(skip(3),take(10))
    //interval(500).pipe(skip(20),take(10))
   of(1,2,3).pipe(skip(5))
    
    .subscribe((data) => {
      console.log(data);

    }, (error) => {
      console.log('error' + error);

    }, () => {
      console.log('complete');

    })
  }

}
