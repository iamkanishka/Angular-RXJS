import { Component, OnInit } from '@angular/core';
import { asapScheduler, asyncScheduler, merge, of, queueScheduler } from 'rxjs';

@Component({
  selector: 'app-schedulers',
  templateUrl: './schedulers.component.html',
  styleUrls: ['./schedulers.component.scss']
})
export class SchedulersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('script starting');
    
    let queuescheduler$ = of('queue Scheduler',queueScheduler);
    let asyncscheduler$ = of('asyn Scheduler',asyncScheduler);
    let asapscheduler$ = of('asap Scheduler',asapScheduler);

    merge(queuescheduler$,asyncscheduler$, asapscheduler$).subscribe((data)=>{
      console.log(data);
      
    })
    console.log('script ending ');


  }

}
