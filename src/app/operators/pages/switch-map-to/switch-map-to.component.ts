import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { switchMap, switchMapTo, take } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map-to',
  templateUrl: './switch-map-to.component.html',
  styleUrls: ['./switch-map-to.component.scss']
})
export class SwitchMapToComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    interval(30)
    .pipe(switchMapTo(interval(10)),take(10)).subscribe((data)=>{
     console.log(data);
     
    })
  }

}
