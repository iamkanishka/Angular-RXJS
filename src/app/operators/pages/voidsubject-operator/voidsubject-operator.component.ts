import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-voidsubject-operator',
  templateUrl: './voidsubject-operator.component.html',
  styleUrls: ['./voidsubject-operator.component.scss']
})
export class VoidsubjectOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let subject1$ =  new Subject<number>();

    subject1$.subscribe((data)=>{
     console.log(data);
    });
 
    subject1$.next(1);
    subject1$.next(2);

    let subject2$ =  new Subject<number|string>();
 
    subject2$.subscribe((data)=>{
     console.log(data );
    });
 
    subject2$.next('Hai Kanishka');
    subject2$.next('Hi naik');


    let subject3$ =  new Subject<void>();
 
    subject3$.subscribe((data)=>{
     console.log(data );
    });
 
    subject3$.next();
    subject3$.next();


  }

}
