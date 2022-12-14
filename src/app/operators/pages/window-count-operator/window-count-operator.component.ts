import { Component, OnInit } from '@angular/core';
import { interval, mergeMap, toArray, window, windowCount } from 'rxjs';

@Component({
  selector: 'app-window-count-operator',
  templateUrl: './window-count-operator.component.html',
  styleUrls: ['./window-count-operator.component.scss']
})
export class WindowCountOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let source$ =  interval(500);
    source$
    .pipe(windowCount(4,2),mergeMap((val)=>val.pipe(toArray())))
    .subscribe((data)=>{
      console.log(data);
      
    })


    // source$
    // .pipe(window(interval(2000)),mergeMap((val)=>val.pipe(toArray())))
    // .subscribe((data)=>{
    //   console.log(data);
      
    // })
  }

}
