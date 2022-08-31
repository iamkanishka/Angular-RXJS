import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';

@Component({
  selector: 'app-fork-join-operator',
  templateUrl: './fork-join-operator.component.html',
  styleUrls: ['./fork-join-operator.component.scss']
})
export class ForkJoinOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let source1$ = new Observable((observe)=>{
      observe.next(1);
      observe.next(2);
      observe.error('errror')
    });
    let source2$ = of('a','b','c','d');

    forkJoin({source1:source1$,source2:source2$}).subscribe((data)=>{
      console.log(data);
      
    })
    
  }

}
