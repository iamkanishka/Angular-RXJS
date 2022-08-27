import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { exhaustMap, filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.scss']
})
export class ExhaustMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  interval(1000)
    // .pipe(map(value => { return of(value * 10) }), mergeMap((obs)=>obs))
    .pipe(filter((id)=>id>0),take(5),exhaustMap((idValue)=>{
      console.log(idValue);
      
      return ajax(`https://jsonplaceholder.typicode.com/posts/${idValue}`);
    },)).subscribe((data)=>{
      console.log(data.response);
      
    })
  }

}
