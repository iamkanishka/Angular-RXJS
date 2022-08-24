import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { single } from 'rxjs/operators';

@Component({
  selector: 'app-singleoperator',
  templateUrl: './singleoperator.component.html',
  styleUrls: ['./singleoperator.component.scss']
})
export class SingleoperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(1)
    .pipe(single())
    .subscribe((data)=>{
       console.log(data);

    },(error)=>{
      console.log(error);
      
    },()=>{
      console.log('Single Element Complete');
      
    })
    of(1,2)
    .pipe(single(value=>value%2===0))
    .subscribe((data)=>{
       console.log(data);

    },(error)=>{
      console.log(error);
      
    },()=>{
      console.log('Single Element Complete');
      
    })

    of(1,2,5,7,9)
    .pipe(single(value=>value>5))
    .subscribe((data)=>{
       console.log(data);

    },(error)=>{
      console.log(error);
      
    },()=>{
      console.log('Single Element Complete');
      
    })
  }

}
