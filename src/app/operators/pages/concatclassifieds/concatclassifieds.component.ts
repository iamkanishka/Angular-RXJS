import { Component, OnInit } from '@angular/core';
import { concat, concatAll, concatMap, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-concatclassifieds',
  templateUrl: './concatclassifieds.component.html',
  styleUrls: ['./concatclassifieds.component.scss']
})
export class ConcatclassifiedsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let source1$ = interval(1000).pipe(map((val)=>'value from source1: '+val),take(5));
    let source2$ = interval(500).pipe(map((val)=>'value from source2: '+val),take(5));

    // concat(source1$,source2$).subscribe((data)=>{
    //   console.log(data);
      
    // })

    // source1$
    // .pipe(map((val)=>source2$), concatAll())
    // .subscribe((data)=>{
    //   console.log(data);
      
    // })


    source1$
    .pipe(concatMap((val)=>source2$))
    .subscribe((data)=>{
      console.log(data);
      
    })

  }

}
