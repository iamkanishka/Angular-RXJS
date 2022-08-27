import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(1,2,3,4,5)
    .pipe(switchMap((idValue)=>{
      console.log(idValue);
      
      return ajax(`https://jsonplaceholder.typicode.com/posts/${idValue}`);
    }))
    .subscribe((data)=>{
      console.log(data);
      
    })

  //  interval(30000)
  //   .pipe(switchMap((idValue)=>{
  //     console.log(idValue);
      
  //     return ajax(`https://jsonplaceholder.typicode.com/posts/${idValue}`);
  //   }))
  //   .subscribe((data)=>{
  //     console.log(data);
      
  //   })
  }

}
