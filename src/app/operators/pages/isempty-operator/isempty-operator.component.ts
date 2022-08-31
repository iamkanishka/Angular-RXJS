import { Component, OnInit } from '@angular/core';

import { isEmpty, of,count, Observable } from 'rxjs';

@Component({
  selector: 'app-isempty-operator',
  templateUrl: './isempty-operator.component.html',
  styleUrls: ['./isempty-operator.component.scss']
})
export class IsemptyOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    // let source$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9);
    let source$ = new Observable((observer)=>{
      observer.next(1);
      setTimeout(()=>{
        observer.next(2);
        observer.complete()
      })
    })


    source$
      .pipe(isEmpty())
      .subscribe((data) => {
        if(data){
        console.log('Empty Observable by is Empty'+data)
         }else{
          console.log('Not Empty Observable by is Empty'+data)
        }
      
      });

      
    source$
    .pipe(count())
    .subscribe((data) =>{ 
      if(data){
        console.log('Not Empty Observable by is Empty'+data)
         }else{
          console.log(' Empty Observable by is Empty'+data)
        }
 
    });

  }

}
