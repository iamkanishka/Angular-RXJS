import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { skipUntil } from 'rxjs/operators';

@Component({
  selector: 'app-skip-until-operator',
  templateUrl: './skip-until-operator.component.html',
  styleUrls: ['./skip-until-operator.component.scss']
})
export class SkipUntilOperatorComponent implements OnInit, AfterViewInit {
  buttonEvent!: Observable<Event>
  shownumber: number = 0

  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.buttonEvent = fromEvent(document.getElementById('skipuntil')!, 'click')
    interval(500).pipe(skipUntil(this.buttonEvent)).subscribe((data) => {
      console.log(data);
      this.shownumber = data
    }, (error) => {
      console.log('error' + error);

    }, () => {
      console.log('complete');

    })
  }




}
