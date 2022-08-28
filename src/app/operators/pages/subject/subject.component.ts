import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.observable();
    this.subjectasObservalble()
  }

  observable() {
    let observable$ = new Observable<number>((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.next(4);
      observer.complete();
    })

    let observer1 = {
      next(value: number) { console.log('Observer 1 ' + value) },
      error(error: string) { console.log('Observer 1 Error' + error) },
      complete() { console.log('Observer 1 complete'); }
    }

    let observer2 = {
      next(value: number) { console.log('Observer 2 ' + value) },
      error(error: string) { console.log('Observer 2 Error' + error) },
      complete() { console.log('Observer 2 complete'); }
    }

    observable$.subscribe(observer1);
    observable$.subscribe(observer2)


  }

  subjectasObservalble(){
    let observable$ = of(1,2,3,4,5)
    let observer1 = {
      next(value: number) { console.log('Observer 1 ' + value) },
      error(error: string) { console.log('Observer 1 Error' + error) },
      complete() { console.log('Observer 1 complete'); }
    }

    let observer2 = {
      next(value: number) { console.log('Observer 2 ' + value) },
      error(error: string) { console.log('Observer 2 Error' + error) },
      complete() { console.log('Observer 2 complete'); }
    }

    let subject = new Subject<number>();
    subject.subscribe(observer1);
    subject.subscribe(observer2);

    observable$.subscribe(subject)

  }

}
