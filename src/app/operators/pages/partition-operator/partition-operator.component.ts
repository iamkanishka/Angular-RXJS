import { Component, OnInit } from '@angular/core';
import { concat, concatMap, from, of, partition, toArray } from 'rxjs';

@Component({
  selector: 'app-partition-operator',
  templateUrl: './partition-operator.component.html',
  styleUrls: ['./partition-operator.component.scss']
})
export class PartitionOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let source$ =  of(1,2,3,4,5,6,7,8,9,10,11,12)

    let data = partition(source$,(value)=>value%2===0)
    console.log(data);

    data[0].subscribe((data)=>{
      console.log(data);
      
    })

    
    data[1].subscribe((data)=>{
      console.log(data);
      
    })

    from(data)
    .pipe(concatMap(d=>d.pipe(toArray())))
    .subscribe((data)=>{
      console.log(data);
      
    })
    
  }

}
