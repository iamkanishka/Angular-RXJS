import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of, retry } from 'rxjs';

@Component({
  selector: 'app-retry-operator',
  templateUrl: './retry-operator.component.html',
  styleUrls: ['./retry-operator.component.scss']
})
export class RetryOperatorComponent implements OnInit {

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

    source$
    .pipe(retry(1),catchError((error)=>{
      return of('a','b')
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
