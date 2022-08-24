import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { elementAt } from 'rxjs/operators';

@Component({
  selector: 'app-element-atoperator',
  templateUrl: './element-atoperator.component.html',
  styleUrls: ['./element-atoperator.component.scss']
})
export class ElementAtoperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // of(1,3,5,7,9)
    // .pipe(elementAt(2))
    // .subscribe((data)=>{
    //    console.log(data);

    // },(error)=>{
    //   console.log(error);
      
    // },()=>{
    //   console.log('First Complete');
      
    // })

//Default Value
    of(1,3,5,7,9)
    .pipe(elementAt(10,99))
    .subscribe((data)=>{
       console.log(data);

    },(error)=>{
      console.log(error);
      
    },()=>{
      console.log('ElementAt Complete');
      
    })
    

  }

}
