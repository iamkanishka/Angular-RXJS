import { Component, OnInit } from '@angular/core';
import { ConnectableObservable, interval, Subject } from 'rxjs';
import { multicast } from 'rxjs/operators';

@Component({
  selector: 'app-multi-cast',
  templateUrl: './multi-cast.component.html',
  styleUrls: ['./multi-cast.component.scss']
})
export class MultiCastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let source = interval(1000).pipe(multicast(new Subject())) as ConnectableObservable<number>

    source.subscribe((data)=>{
      console.log(data);
     })  

     setTimeout(()=>{
      source.subscribe((data)=>{
        console.log(data);
        
      })
  
     },3000)
        
    source.connect()
  }

}
