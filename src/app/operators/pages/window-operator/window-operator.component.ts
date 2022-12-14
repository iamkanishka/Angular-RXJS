import { Component, OnInit } from '@angular/core';
import { buffer, interval, mergeMap, toArray, window } from 'rxjs';

@Component({
  selector: 'app-window-operator',
  templateUrl: './window-operator.component.html',
  styleUrls: ['./window-operator.component.scss']
})
export class WindowOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let source$ =  interval(500);
    // source$
    // .pipe(buffer(interval(2000)))
    // .subscribe((data)=>{
    //   console.log(data);
      
    // })
    source$
    .pipe(window(interval(2000)),mergeMap((val)=>val.pipe(toArray())))
    .subscribe((data)=>{
      console.log(data);
      
    })
  }

}
