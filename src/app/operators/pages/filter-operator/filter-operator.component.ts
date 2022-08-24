import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, of, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-filter-operator',
  templateUrl: './filter-operator.component.html',
  styleUrls: ['./filter-operator.component.scss']
})
export class FilterOperatorComponent implements OnInit, OnDestroy {
eventSubscription!:Subscription
  constructor() { }

  ngOnInit(): void {
    of(1,2,3,4,5,6).pipe(filter((value) => value>=3)).subscribe((data)=>{
      console.log(data);
      
    })



    //If you click on the Anchor element, this observable works 
 this.eventSubscription = fromEvent(document,'click')
    .pipe(filter((event)=>{
       return (event.target as HTMLElement).tagName ==='A'
    }))
    .subscribe((data)=>{
      console.log(data);
      
    })
  }

  
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.eventSubscription.unsubscribe()
  }

}
