import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-distint-until-chnaged-operator',
  templateUrl: './distint-until-chnaged-operator.component.html',
  styleUrls: ['./distint-until-chnaged-operator.component.scss']
})
export class DistintUntilChnagedOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // of(1,2,2,1,3,3).pipe(distinctUntilChanged())
    // .subscribe((data) => { console.log(data); }, (error) => { console.log('error' + error); }, () => { console.log('complete'); })

    // of(1,2,3,4).pipe(distinctUntilChanged((prev,cur)=>{
    //   return cur === prev+1
    // }))
    // .subscribe((data) => { console.log(data); }, (error) => { console.log('error' + error); }, () => { console.log('complete'); })

    var employees:any =[
      {id:1, name:"kanishka"},
      {id:1, name:"kanishka Web Dev"},
      {id:3, name:"kanishka naik"},
      {id:4, name:"kanishka"},
  
     ]
  
     from(employees).pipe(distinctUntilChanged((prev:any,curr:any)=>{
      return  prev.id===curr.id
     }, (k:any)=>k.id))
     .subscribe((data) => { console.log(data); }, (error) => { console.log('error' + error); }, () => { console.log('complete'); })
  
  }

}
