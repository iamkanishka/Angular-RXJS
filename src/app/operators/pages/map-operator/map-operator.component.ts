import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html',
  styleUrls: ['./map-operator.component.scss']
})
export class MapOperatorComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    of(1, 2, 5, 7, 9)
      .pipe(map(value => { return value * 10 }))
      .subscribe((data) => {
        console.log(data);

      }, (error) => {
        console.log(error);

      }, () => {
        console.log('Map Complete');

      })

    of(1, 2, 4, 6, 8, 5, 7, 9)
      .pipe(filter(value => value % 2 === 0), map(value => { return value * 10 }))
      .subscribe((data) => {
        console.log(data);

      }, (error) => {
        console.log(error);

      }, () => {
        console.log('Map Complete');

      })


    //Higher Order Operators
   

    //Wrong if you sucbscribr multiple times, while returning observerble from the observable, use Hoigher order opearators
    // of(1, 2, 4, 6, 8, 5, 7, 9)
    //   .pipe(map(value => { return of(value * 10) }))
    //   .subscribe((data) => {
    //     console.log(data);
    //     data.subscribe((data) => {
    //       console.log(data);
    //     })

    //   }, (error) => {
    //     console.log(error);

    //   }, () => {
    //     console.log('Higher Order Operators Map Complete');

    //   })


    of(1, 2, 4, 6, 8, 5, 7, 9)
      // .pipe(map(value => { return of(value * 10) }), mergeMap((obs)=>obs))
      .pipe(mergeMap(value => { return of(value * 10) }))

      .subscribe((data) => {
        console.log(data);
        

      }, (error) => {
        console.log(error);

      }, () => {
        console.log('Higher Order Operators Map Complete');

      })


      of(1, 2, 4, 6, 8, 5, 7, 9)
      // .pipe(map(value => { return of(value * 10) }), mergeMap((obs)=>obs))
      .pipe(mergeMap((idValue)=>{
        return ajax(`https://jsonplaceholder.typicode.com/posts/${idValue}`);
      }))

      .subscribe((data) => {
        console.log(data.response);
        
        // data.subscribe((response)=>{
        //   console.log(response.response);
          
        // })

      }, (error) => {
        console.log(error);

      }, () => {
        console.log('Higher Order Operators Map Complete');

      })
  }

  ngAfterViewInit(): void {
    const mapButtonEvent = fromEvent(document.getElementById('map_button')!, 'click')
    mapButtonEvent
      .pipe(map((event: Event) => {
        return { x: (event as PointerEvent).clientX, y: (event as PointerEvent).clientY }
      }))
      .subscribe((data) => {
        console.log(data);

      })
  }

}
