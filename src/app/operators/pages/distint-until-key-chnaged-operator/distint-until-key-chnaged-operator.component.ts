import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

@Component({
  selector: 'app-distint-until-key-chnaged-operator',
  templateUrl: './distint-until-key-chnaged-operator.component.html',
  styleUrls: ['./distint-until-key-chnaged-operator.component.scss']
})
export class DistintUntilKeyChnagedOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var employees:any =[
      {id:1, name:"kanishka"},
      {id:1, name:"kanishka"},
     {id:1, name:"kanishka Web Dev"},
      {id:3, name:"kanishka naik"},
      {id:4, name:"kanishka"},
  
     ]
  
    //  of(employees)
    //  .pipe(distinctUntilKeyChanged('name'))
    //  .subscribe((data) => { console.log(data); }, (error) => { console.log('error' + error); }, () => { console.log('complete'); })
  
     of(employees)
     .pipe(distinctUntilKeyChanged('name',(prev:any,curr:any)=>{
      return  prev.id===curr.id
     }))
     .subscribe((data) => { console.log(data); }, (error) => { console.log('error' + error); }, () => { console.log('complete'); })
  

     

  }

}
