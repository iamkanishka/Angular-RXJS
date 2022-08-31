import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let observer1$ =  new Observable((observer)=>{
     let number= 0
      for(let i=1000;i<100000;i+=1000){
        setTimeout(()=>{
          if(number===6){
            observer.error('error')
          }
          observer.next(number++)
        },i)
      }
      
    })

    let observer2$ =  new Observable((observer)=>{
      setTimeout(()=>{
        observer.next(10)
      },5000)
    })

    combineLatest([observer1$,observer2$]).subscribe((data)=>{
      console.log(data);
      
    })
  }

}
