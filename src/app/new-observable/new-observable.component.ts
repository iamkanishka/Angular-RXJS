import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-observable',
  templateUrl: './new-observable.component.html',
  styleUrls: ['./new-observable.component.scss']
})
export class NewObservableComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

    const newObservable =  new Observable<number>(observer=>{
      for(let i=0 ;i<=5;i++){
         if(i==4){
         // observer.error helps in throwing error  
         observer.error('unknow error, i value is 4')
         }
         // observer.next helps in Provideing Data to the Observable  
         observer.next(i)
        }

      //if there is an any error then observer.complte willnot execute
     // observer.complete();
    })

let observer ={
  next:(data:number)=>{console.log(data)},
  error: (error:string)=>{console.log(error)},
  complete: ()=>{console.log('Observer Loop Done')},

  }
  newObservable.subscribe(observer)


  }


  }


