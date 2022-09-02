import { Component, OnInit } from '@angular/core';
import { interval, map, mergeAll, take } from 'rxjs';

@Component({
  selector: 'app-merge-all-operator',
  templateUrl: './merge-all-operator.component.html',
  styleUrls: ['./merge-all-operator.component.scss']
})
export class MergeAllOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let source$ = interval(1000).pipe(take(4))
    source$.pipe(map((value)=>interval(500)
    .pipe(map(val=>`parent Inteval ${value} with Child Interval ${val} `),take(5))),mergeAll(2))
    .subscribe((data)=>{
      console.log(data);
      
    })
  }

}
