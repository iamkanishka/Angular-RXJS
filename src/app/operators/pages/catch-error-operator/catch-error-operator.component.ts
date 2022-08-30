import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Component({
  selector: 'app-catch-error-operator',
  templateUrl: './catch-error-operator.component.html',
  styleUrls: ['./catch-error-operator.component.scss']
})
export class CatchErrorOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let source$ = new Observable((observer)=>{
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.error('asdcasd')

      observer.next(4);
      observer.next(5);

    })

    source$.
    pipe(catchError((error,caught)=>{
      return of(6,7,8,9,10)
      // throw 'what is this error';
      // return caught
    }))
    .subscribe((data)=>{
      console.log(data);
      
    },(error)=>{
      console.error(error);
      
    },()=>{
      console.log('complete');
      
    })
  }

}
