import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-cancelling-observables',
  templateUrl: './cancelling-observables.component.html',
  styleUrls: ['./cancelling-observables.component.scss']
})
export class CancellingObservablesComponent implements OnInit {
timerSubscription!: Subscription
timer!:string
  constructor() { }

  ngOnInit(): void {
    const newObservable = interval(1000)
   this.timerSubscription= newObservable.subscribe((data)=>{
    this.timer = new Date().toLocaleTimeString() +' '+data
      console.log(this.timer);
      
    })
  }

  cancelTimer(){
    console.log('cancelling timer Observable');
    
  this.timerSubscription.unsubscribe()
  }

}
