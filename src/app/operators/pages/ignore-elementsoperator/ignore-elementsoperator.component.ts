import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { ignoreElements, take } from 'rxjs/operators';

@Component({
  selector: 'app-ignore-elementsoperator',
  templateUrl: './ignore-elementsoperator.component.html',
  styleUrls: ['./ignore-elementsoperator.component.scss']
})
export class IgnoreElementsoperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(1,3,5,7,9)
    .pipe(ignoreElements())
    .subscribe((data)=>{
       console.log(data);

    },(error)=>{
      console.log(error);
      
    },()=>{
      console.log('ElementAt Complete');
      
    })

   interval(1000)
    .pipe(take(10),ignoreElements())
    .subscribe((data)=>{
       console.log(data);

    },(error)=>{
      console.log(error);
      
    },()=>{
      console.log('ElementAt Complete');
      
    })
  }

}
