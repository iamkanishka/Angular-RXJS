import { Component, OnInit } from '@angular/core';
import { interval,  } from 'rxjs';
import { bufferToggle, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {


   Operators:any[]=["buffer","bufferCount","bufferTimerCount","bufferToggle"]
  constructor() { }

  ngOnInit(): void {

    let opening = interval(6000).pipe(tap(()=>{console.log('Open');}))
    let closing  = ()=>interval(3000).pipe(tap(()=>{console.log('Close');}))

    interval(1000).pipe(tap((data)=>{console.log(data);}),bufferToggle(opening,closing), take(3)).subscribe((data)=>{
      console.log(data);
      
    })
  }

}
