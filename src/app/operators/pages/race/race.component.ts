import { Component, OnInit } from '@angular/core';
import { interval, map, race, tap } from 'rxjs';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let source1$ = interval(1000).pipe(map(v=>'from first'+v));
    let source2$ = interval(3000).pipe(tap((v)=> { throw 'error'}));
    let source3$ = interval(5000).pipe(map(v=>'from third'+v));
   
    race(source1$,source2$,source3$).subscribe((data)=>{
      console.log(data);
      
    })

  }

}
