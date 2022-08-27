import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMapTo } from 'rxjs/operators';

@Component({
  selector: 'app-mergemap-to',
  templateUrl: './mergemap-to.component.html',
  styleUrls: ['./mergemap-to.component.scss']
})
export class MergemapToComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(1,2,3,4,5,6).pipe(mergeMapTo(ajax('https://jsonplaceholder.typicode.com/posts').pipe(map(value=>{
      return value.response
    }))))
    .subscribe((data)=>{
      console.log(data);
      
    })
  }

}
