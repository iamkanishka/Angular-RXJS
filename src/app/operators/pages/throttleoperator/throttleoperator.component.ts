import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { throttle } from 'rxjs/operators';

@Component({
  selector: 'app-throttleoperator',
  templateUrl: './throttleoperator.component.html',
  styleUrls: ['./throttleoperator.component.scss']
})
export class ThrottleoperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    interval(1000)
    .pipe(throttle((value)=>interval(2000),{leading:true,trailing:false}))
    .subscribe((data)=>{
       console.log(data);

    })
  }

}
