import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

import { first } from 'rxjs/operators';

@Component({
  selector: 'app-firstoperator',
  templateUrl: './firstoperator.component.html',
  styleUrls: ['./firstoperator.component.scss']
})
export class FirstoperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // of(1,2,3,4,5,6,7)
    // .pipe(first())
    // .subscribe((data)=>{
    //    console.log(data);

    // },(error)=>{
    //   console.log(error);
      
    // },()=>{
    //   console.log('First Complete');
      
    // })


    // of(1,2,3,4,5,6,7)
    // .pipe(first(value=>value%2===0))
    // .subscribe((data)=>{
    //    console.log(data);

    // },(error)=>{
    //   console.log(error);
      
    // },()=>{
    //   console.log('First Complete');
      
    // })

    // of(1,3,5,7,9)
    // .pipe(first(value=>value%2===0))
    // .subscribe((data)=>{
    //    console.log(data);

    // },(error)=>{
    //   console.log(error);
      
    // },()=>{
    //   console.log('First Complete');
      
    // })


    of(1,3,5,7,9)
    .pipe(first(value=>value%2===0, 10))
    .subscribe((data)=>{
       console.log(data);

    },(error)=>{
      console.log(error);
      
    },()=>{
      console.log('First Complete');
      
    })
  }

}
