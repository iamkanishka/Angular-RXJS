import { Component, OnInit } from '@angular/core';
import { connectable, ConnectableObservable, interval, publishLast, publishReplay, ReplaySubject, share, take } from 'rxjs';

@Component({
  selector: 'app-publish-replay',
  templateUrl: './publish-replay.component.html',
  styleUrls: ['./publish-replay.component.scss']
})
export class PublishReplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //      let source$ =   interval(1000).pipe(take(10),publishReplay()) as ConnectableObservable<number>;

    // source$.subscribe((data)=>{
    //   console.log('observer 1 '+data );
    //  });
  
   
    // setTimeout(()=>{
    //   source$.subscribe((data)=>{
    //     console.log('observer 2 '+data );
    //    });
    // },4000)

    // source$.connect();


    // let source$ =   connectable( interval(1000).pipe(take(10)),{
    //   connector:()=> new ReplaySubject(2, 3000)
    // } )
    // source$.subscribe((data)=>{
    //   console.log('observer 1 '+data );
    //  });
  
   
    // setTimeout(()=>{
    //   source$.subscribe((data)=>{
    //     console.log('observer 2 '+data );
    //    });
    // },4000)

    // source$.connect();


    let source$ =  interval(1000).pipe(share({
      connector:()=> new ReplaySubject(2, 3000)
    } ))
    source$.subscribe((data)=>{
      console.log('observer 1 '+data );
     });
  
   
    setTimeout(()=>{
      source$.subscribe((data)=>{
        console.log('observer 2 '+data );
       });
    },4000)

   // source$.connect();
  }

}
