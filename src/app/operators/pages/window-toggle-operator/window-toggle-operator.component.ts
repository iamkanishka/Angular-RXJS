import { Component, OnInit } from '@angular/core';
import { interval, mergeMap, toArray, window, windowToggle } from 'rxjs';

@Component({
  selector: 'app-window-toggle-operator',
  templateUrl: './window-toggle-operator.component.html',
  styleUrls: ['./window-toggle-operator.component.scss']
})
export class WindowToggleOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let source$ =  interval(500);
 
    source$
    .pipe(windowToggle(interval(2000),()=>interval(2000)),mergeMap((val)=>val.pipe(toArray())))
    .subscribe((data)=>{
      console.log(data);
      
    })
  }

}
