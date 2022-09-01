import { Component, OnInit } from '@angular/core';
import { asyncScheduler, map, merge, observeOn, of, subscribeOn } from 'rxjs';

@Component({
  selector: 'app-observe-on-opeartor',
  templateUrl: './observe-on-opeartor.component.html',
  styleUrls: ['./observe-on-opeartor.component.scss']
})
export class ObserveOnOpeartorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Start Scripting");
    
    let source1$ = of(5,10,15,18,20).pipe(subscribeOn(asyncScheduler));
    let source2$ = of(1,2,3,4,5,6);

   
  //  merge(source1$,source2$)
  source2$
    .pipe(observeOn(asyncScheduler),map(data=>{
       console.log('map execution');
      return data*10
    }))
    .subscribe((data)=>console.log(data));

    console.log("End Scripting");
  }

}
