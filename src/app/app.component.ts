import { AfterViewInit, Component } from '@angular/core';

import { from, fromEvent } from 'rxjs';

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
    this.postArrayListObservable$.subscribe({
      next: (data) => { console.log(data) },
      error: (error) => { console.log(error) },
      complete: () => { console.log('Post Array completed') },
    })

    this.promiseObservable$.subscribe({
      next: (data) => { console.log(data) },
      error: (error) => { console.log(error) },
      complete: () => { console.log('Promise completed') },
    })


  }

  ngAfterViewInit(): void {
    fromEvent(document.getElementById('click-button')!, 'click').subscribe({
      next: (data) => { console.log(data) },
      error: (error) => { console.log(error) },
      complete: () => { console.log('Promise completed') },
    })
  }

}
