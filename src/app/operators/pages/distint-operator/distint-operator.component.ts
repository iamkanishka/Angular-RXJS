import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { distinct } from 'rxjs/operators';

@Component({
  selector: 'app-distint-operator',
  templateUrl: './distint-operator.component.html',
  styleUrls: ['./distint-operator.component.scss']
})
export class DistintOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
       
    of(1,2,3,4,5,6,1,2,4).pipe(distinct())
    .subscribe((data) => { console.log(data); }, (error) => { console.log('error' + error); }, () => { console.log('complete'); })

   var employees =[
    {id:1, name:"kanishka"},
    {id:2, name:"kanishka naik"},
    {id:3, name:"kanishka"},

   ]

   from(employees).pipe(distinct((x)=>x.name))
   .subscribe((data) => { console.log(data); }, (error) => { console.log('error' + error); }, () => { console.log('complete'); })


  }

}
