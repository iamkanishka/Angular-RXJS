import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { concatMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(1,2,3,4,5,6)
   .pipe(concatMap((idValue)=>{
    console.log(idValue);
    
    return ajax(`https://jsonplaceholder.typicode.com/posts/${idValue}`)
    .pipe(map((value)=>{
      return value.response
    }))
   }))
    .subscribe((data)=>{
console.log(data);

    })
  }

}
