import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replaysubject-operator',
  templateUrl: './replaysubject-operator.component.html',
  styleUrls: ['./replaysubject-operator.component.scss']
})
export class ReplaysubjectOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let replaySubject$ = new ReplaySubject(2,4000);

    replaySubject$.next(1)
    replaySubject$.subscribe((data) => {
      console.log('observer 1 ' + data);
    });

    replaySubject$.next(2);
    replaySubject$.next(3);
    replaySubject$.next(4);
    replaySubject$.error('Error Occured');



    setTimeout(() => {
      replaySubject$.subscribe((data) => {
        console.log('observer 2 ' + data);
      });
    }, 3000)


  }

}
