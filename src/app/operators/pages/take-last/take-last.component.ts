import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take, takeLast } from 'rxjs/operators';
@Component({
  selector: 'app-take-last',
  templateUrl: './take-last.component.html',
  styleUrls: ['./take-last.component.scss']
})
export class TakeLastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    interval(500).pipe(take(10),takeLast(5)).subscribe((data)=>{
      console.log(data);
       },(error)=>{},
       ()=>{console.log('complete');
       })
  }

}
