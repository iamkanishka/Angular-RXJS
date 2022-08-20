import { AfterViewInit, Component } from '@angular/core';

import { from, fromEvent } from 'rxjs';
import { funcObservale, functionObs,  } from './Services/function';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Angular-RXJS';

  postArrayList = [
    { name: 'Post 1', description: 'Description 1' },
    { name: 'Post 2', description: 'Description 2' },
    { name: 'Post 3', description: 'Description 3' }]

  postArrayListObservable$ = from(this.postArrayList)

  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve('Promise Observable');
    }, 3000)
  })

  promiseObservable$ = from(this.promise)

  constructor() {
    // this.postArrayListObservable$.subscribe({
    //   next: (data) => { console.log(data) },
    //   error: (error) => { console.log(error) },
    //   complete: () => { console.log('Post Array completed') },
    // })

    // this.promiseObservable$.subscribe({
    //   next: (data) => { console.log(data) },
    //   error: (error) => { console.log(error) },
    //   complete: () => { console.log('Promise completed') },
    // })
    console.log('Before function');
     console.log(functionObs());
    console.log(functionObs());
    console.log('After function');


    console.log('Before Observale');
    funcObservale.subscribe((data)=>{console.log(data);})
    funcObservale.subscribe((data)=>{console.log(data);})

    console.log('After Observable');

  

  }

  ngAfterViewInit(): void {
    // fromEvent(document.getElementById('click-button')!, 'click').subscribe({
    //   next: (data) => { console.log(data) },
    //   error: (error) => { console.log(error) },
    //   complete: () => { console.log('Promise completed') },
    // })
  }

}
