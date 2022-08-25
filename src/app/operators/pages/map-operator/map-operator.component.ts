import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html',
  styleUrls: ['./map-operator.component.scss']
})
export class MapOperatorComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    of(1,2,5,7,9)
    .pipe(map(value=>{return value*10}))
    .subscribe((data)=>{
       console.log(data);

    },(error)=>{
      console.log(error);
      
    },()=>{
      console.log('Map Complete');
      
    })

    of(1,2,4,6,8,5,7,9)
    .pipe(filter(value=>value%2===0),map(value=>{return value*10}))
    .subscribe((data)=>{
       console.log(data);

    },(error)=>{
      console.log(error);
      
    },()=>{
      console.log('Map Complete');
      
    })
  }

  ngAfterViewInit(): void {
      const mapButtonEvent = fromEvent(document.getElementById('map_button')!,'click')
      mapButtonEvent
      .pipe(map((event:Event)=>{
        return {x:(event as PointerEvent).clientX,y:(event as PointerEvent).clientY}
      }))
      .subscribe((data)=>{
        console.log(data);
        
      })
  }

}
