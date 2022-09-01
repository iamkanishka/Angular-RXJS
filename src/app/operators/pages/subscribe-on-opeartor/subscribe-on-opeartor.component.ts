import { Component, OnInit } from '@angular/core';
import { asyncScheduler, merge, of, queueScheduler, subscribeOn } from 'rxjs';

@Component({
  selector: 'app-subscribe-on-opeartor',
  templateUrl: './subscribe-on-opeartor.component.html',
  styleUrls: ['./subscribe-on-opeartor.component.scss']
})
export class SubscribeOnOpeartorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Start Scripting");
    
    let source1$ = of(5,10,15,18,20).pipe(subscribeOn(asyncScheduler));
    let source2$ = of(1,2,3,4,5,6);

   
   merge(source1$,source2$)
   // .pipe(subscribeOn(asyncScheduler))
    .subscribe((data)=>console.log(data));

    console.log("End Scripting");

  }

}
