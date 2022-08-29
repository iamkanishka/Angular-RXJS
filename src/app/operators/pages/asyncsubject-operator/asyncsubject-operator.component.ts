import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-asyncsubject-operator',
  templateUrl: './asyncsubject-operator.component.html',
  styleUrls: ['./asyncsubject-operator.component.scss']
})
export class AsyncsubjectOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let asyncSubject$= new AsyncSubject();
    asyncSubject$.subscribe((data)=>{
      console.log('observer 1'+data);
      
    })

    asyncSubject$.next(1);
    asyncSubject$.next(2); 
    asyncSubject$.next(3); 
    asyncSubject$.next(5); 
    // asyncSubject$.complete();
     

    setTimeout(()=>{
      asyncSubject$.subscribe((data)=>{
        console.log('observer 2',data);
        
      })
     asyncSubject$.error('Error');

    },3000)
    
  }

}
