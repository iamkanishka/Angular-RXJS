import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-basic-operators',
  templateUrl: './basic-operators.component.html',
  styleUrls: ['./basic-operators.component.scss']
})
export class BasicOperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const newObservable = interval(1000)
    // newObservable.subscribe(number=>{
    //   if(number%2 === 0){
    //     console.log('Even Number ' +number);
    //    }
    //    })

    //    newObservable.pipe(filter((number)=>{
    //     return number%2===0
    //    }),map(number=>{
    //     return 'even Number ' + number
    //    })
       
    //    ).subscribe((data)=>{
    //     console.log(data);
        
    //    })
  }

}
