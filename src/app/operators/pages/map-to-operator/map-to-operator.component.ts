import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-map-to-operator',
  templateUrl: './map-to-operator.component.html',
  styleUrls: ['./map-to-operator.component.scss']
})
export class MapToOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(1,2,4,6,8,5,7,9)
    .pipe(mapTo('a'))
    .subscribe((data)=>{
       console.log(data);

    },(error)=>{
      console.log(error);
      
    },()=>{
      console.log('MapTo Complete');
      
    })
  }

}
