import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { concatMapTo, map } from 'rxjs/operators';

@Component({
  selector: 'app-concat-map-to',
  templateUrl: './concat-map-to.component.html',
  styleUrls: ['./concat-map-to.component.scss']
})
export class ConcatMapToComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(1,2,3,4,5,6).pipe(concatMapTo(ajax('https://jsonplaceholder.typicode.com/posts').pipe(map(value=>{
      return value.response
    }))))
    .subscribe((data)=>{
      console.log(data);
      
    })
  }

}
