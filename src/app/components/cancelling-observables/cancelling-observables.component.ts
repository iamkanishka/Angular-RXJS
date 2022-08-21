import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-cancelling-observables',
  templateUrl: './cancelling-observables.component.html',
  styleUrls: ['./cancelling-observables.component.scss']
})
export class CancellingObservablesComponent implements OnInit {
  timerSubscription!: Subscription
  timerBrowserSubscription!: Subscription
  timers: number[] = []
  timer!: string
  constructor() { }

  ngOnInit(): void {
    //   const newObservable = interval(1000)


    //Custom Interval Observalble
    const newObservable = new Observable<number>(observer => {
      let i = 0;
     let interval = setInterval(() => {
        console.log('Timer Execution');
        observer.next(i++);
        if(i===6){
          observer.error('Error Occured')
        }

      
      }, 1000)
      return ()=>{
        console.log('called when observer is unsuscbribed');
    //remove Interval
        clearInterval(interval)
      }
    })


    this.timerSubscription = newObservable.subscribe((data) => {
      this.timer = new Date().toLocaleTimeString() + ' ' + data
      console.log(this.timer);

    });
    this.timerBrowserSubscription = newObservable.subscribe((data: any) => { this.timers.push(data) })
    //we can add subscription in one subscription, it helps in unsubscribing the subscritption
    this.timerSubscription.add(this.timerBrowserSubscription)
    //we can remove subscription from subscription, it helps in unsubscribing the subscritption
    this.timerSubscription.remove(this.timerBrowserSubscription)


  }

  cancelTimer() {
    console.log('cancelling timer Observable');

    this.timerSubscription.unsubscribe()
    //we can add subscription in one subscription, it helps in unsubscribing the subscritption

    this.timerBrowserSubscription.unsubscribe()
  }

}
