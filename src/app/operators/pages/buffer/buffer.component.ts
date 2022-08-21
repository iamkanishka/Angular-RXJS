import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { buffer, tap } from 'rxjs/operators';

@Component({
  selector: 'app-buffer',
  templateUrl: './buffer.component.html',
  styleUrls: ['./buffer.component.scss']
})
export class BufferComponent implements OnInit, AfterViewInit {
intervalData:number[]=[]
showData$!:Observable<Event>;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    this.showData$ =  fromEvent(document.getElementById('showbutton')!,'click')
      
  }

  startInterval(){
    interval(1000).pipe(
      tap((data)=>{console.log(data);}),
      buffer(this.showData$)).subscribe((data:number[])=>{
      this.intervalData.push(...data)
          
    })

  }

}
