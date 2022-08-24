import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { sample } from 'rxjs/operators';

@Component({
  selector: 'app-sampleoperator',
  templateUrl: './sampleoperator.component.html',
  styleUrls: ['./sampleoperator.component.scss']
})
export class SampleoperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    interval(500)
    .pipe(sample(interval(2000)))
    .subscribe((data)=>{
       console.log(data);

    })

  }

}
