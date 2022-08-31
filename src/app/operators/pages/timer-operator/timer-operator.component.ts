import { Component, OnInit } from '@angular/core';
import { concat, concatMap, interval, of, timer } from 'rxjs';

@Component({
  selector: 'app-timer-operator',
  templateUrl: './timer-operator.component.html',
  styleUrls: ['./timer-operator.component.scss']
})
export class TimerOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // let source$ = timer(1000,2000);
    // source$.subscribe((data)=>{
    //   console.log(data);
      
    // })

  //  let  data$= of('a','b','c');
  //   timer(3000).pipe(concatMap(()=>data$)).subscribe((data)=>console.log(data));
    
    interval(5000).subscribe((data)=>console.log(data));
    timer(5000,5000).subscribe((data)=>{
      console.log(data);
      
    });

  }

}
