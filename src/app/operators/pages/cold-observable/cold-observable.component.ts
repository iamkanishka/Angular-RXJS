import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-cold-observable',
  templateUrl: './cold-observable.component.html',
  styleUrls: ['./cold-observable.component.scss']
})
export class ColdObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let observable$ = new Observable((observer) => {
      observer.next(Math.random())
    })

    observable$.subscribe((value) => {
      console.log('observer 1', value);

    })

    observable$.subscribe((value) => {
      console.log('observer 2', value);

    })

    let documentEvent$ = fromEvent(document, 'click');
    documentEvent$.subscribe((data: Event) => {
      console.log((data as PointerEvent).clientX);
    })

    documentEvent$.subscribe((data: Event) => {
      console.log((data as PointerEvent).clientX);
    })

   let subject$ = new Subject()
  let interval$ = interval(1000);
 
  interval$.subscribe(subject$)



  interval$.subscribe((data)=>{
      console.log('Observer 1 '+data);
     })

     setTimeout(()=>{
      interval$.subscribe((data)=>{
        console.log('Observer 2 '+data);
       }) 
    },2000)
  }

}
