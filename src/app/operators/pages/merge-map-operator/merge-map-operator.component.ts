import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map-operator',
  templateUrl: './merge-map-operator.component.html',
  styleUrls: ['./merge-map-operator.component.scss']
})
export class MergeMapOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(1, 2, 4, 6, 8, 5, 7, 9)
    // .pipe(map(value => { return of(value * 10) }), mergeMap((obs)=>obs))
    .pipe(mergeMap((idValue)=>{
      console.log(idValue);
      
      return ajax(`https://jsonplaceholder.typicode.com/posts/${idValue}`);
    },(outerValue,innerValue, outerIndex, innerIndex)=>{
      // console.log(outerValue,innerValue, outerIndex, innerIndex)
      
         return innerValue.response
    }))

    .subscribe((data) => {
      console.log(data);
      
      // data.subscribe((response)=>{
      //   console.log(response.response);
        
      // })

    }, (error) => {
      console.log(error);

    }, () => {
      console.log('MergeMap Operators Map Complete');

    })
  }

}
