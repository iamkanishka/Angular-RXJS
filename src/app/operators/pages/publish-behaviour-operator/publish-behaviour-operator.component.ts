import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, connectable, ConnectableObservable, interval } from 'rxjs';
import { publishBehavior } from 'rxjs/operators';

@Component({
  selector: 'app-publish-behaviour-operator',
  templateUrl: './publish-behaviour-operator.component.html',
  styleUrls: ['./publish-behaviour-operator.component.scss']
})
export class PublishBehaviourOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // let source$ =  interval(1000).pipe(publishBehavior(100)) as ConnectableObservable<number>;

    // source$.subscribe((data)=>{
    //   console.log('observer 1 '+data );
    //  });
  
   
    // setTimeout(()=>{
    //   source$.subscribe((data)=>{
    //     console.log('observer 2 '+data );
    //    });
    // },4000)
     

    // source$.connect()

    let source$ =  connectable(interval(1000),{connector:()=>new BehaviorSubject(100)} )

    source$.subscribe((data)=>{
      console.log('observer 1 '+data );
     });
  
   
    setTimeout(()=>{
      source$.subscribe((data)=>{
        console.log('observer 2 '+data );
       });
    },4000)
     

    source$.connect()

  }

}
