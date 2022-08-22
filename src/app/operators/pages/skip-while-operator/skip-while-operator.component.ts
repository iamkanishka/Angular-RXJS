import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { skipWhile } from 'rxjs/operators';

@Component({
  selector: 'app-skip-while-operator',
  templateUrl: './skip-while-operator.component.html',
  styleUrls: ['./skip-while-operator.component.scss']
})
export class SkipWhileOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
 //   interval(500).pipe(skipWhile(x=>x<5))
    
    of(1,2,3,4,5,6,1,2,4).pipe(skipWhile(x=>x<5))
    .subscribe((data) => {
      console.log(data);

    }, (error) => {
      console.log('error' + error);

    }, () => {
      console.log('complete');

    })
  }

}
