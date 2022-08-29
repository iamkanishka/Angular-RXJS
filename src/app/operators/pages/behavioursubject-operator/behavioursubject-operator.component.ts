import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-behavioursubject-operator',
  templateUrl: './behavioursubject-operator.component.html',
  styleUrls: ['./behavioursubject-operator.component.scss']
})
export class BehavioursubjectOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   let behaviuorsubject$ =  new BehaviorSubject(0);

   behaviuorsubject$.subscribe((data)=>{
    console.log('observer 1 '+data );
   });

   behaviuorsubject$.next(1)

   behaviuorsubject$.subscribe((data)=>{
    console.log('observer 2 '+data );
   });

   behaviuorsubject$.next(2)


  }

}
