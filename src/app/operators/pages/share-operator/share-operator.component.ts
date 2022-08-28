import { Component, OnInit } from '@angular/core';
import { ConnectableObservable, interval, Subject } from 'rxjs';
import { multicast, publish, refCount, share } from 'rxjs/operators';

@Component({
  selector: 'app-share-operator',
  templateUrl: './share-operator.component.html',
  styleUrls: ['./share-operator.component.scss']
})
export class ShareOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // let source = interval(1000).pipe(multicast(new Subject())) as ConnectableObservable<number>
    //  source.subscribe((data)=>{
    //   console.log(data);
    //  })  
    //  setTimeout(()=>{
    //   source.subscribe((data)=>{
    //     console.log(data); })
    //  },2000)

    //  source.connect()


    //  let source = interval(1000).pipe(publish()) as ConnectableObservable<number>
    //  source.subscribe((data)=>{
    //   console.log(data);
    //  })  
    //  setTimeout(()=>{
    //   source.subscribe((data)=>{
    //     console.log(data); })
    //  },2000)

    //  source.connect()

    
    // let source = interval(1000).pipe(publish(), refCount()) 
    // source.subscribe((data)=>{
    //  console.log(data);
    // })  
    // setTimeout(()=>{
    //  source.subscribe((data)=>{
    //    console.log(data); })
    // },2000)


    let source = interval(1000).pipe(share()) 
    source.subscribe((data)=>{
     console.log(data);
    })  
    setTimeout(()=>{
     source.subscribe((data)=>{
       console.log(data); })
    },2000)


 
  }

}
