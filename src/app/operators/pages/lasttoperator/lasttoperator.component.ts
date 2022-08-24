import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { last } from 'rxjs/operators';

@Component({
  selector: 'app-lasttoperator',
  templateUrl: './lasttoperator.component.html',
  styleUrls: ['./lasttoperator.component.scss']
})
export class LasttoperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
     // of(1,2,3,4,5,6,7)
    // .pipe(last())
    // .subscribe((data)=>{
    //    console.log(data);

    // },(error)=>{
    //   console.log(error);
      
    // },()=>{
    //   console.log('First Complete');
      
    // })


    // of(1,2,3,4,5,6,7)
    // .pipe(last(value=>value%2===0))
    // .subscribe((data)=>{
    //    console.log(data);

    // },(error)=>{
    //   console.log(error);
      
    // },()=>{
    //   console.log('First Complete');
      
    // })

    // of(1,3,5,7,9)
    // .pipe(last(value=>value%2===0))
    // .subscribe((data)=>{
    //    console.log(data);

    // },(error)=>{
    //   console.log(error);
      
    // },()=>{
    //   console.log('First Complete');
      
    // })


    of(1,2,3,4,5,6,7)
    .pipe(last(value=>value%2===0, 10))
    .subscribe((data)=>{
       console.log(data);

    },(error)=>{
      console.log(error);
      
    },()=>{
      console.log('First Complete');
      
    })
  }

}
