import { Component, OnInit } from '@angular/core';
import { asyncScheduler, generate } from 'rxjs';
import { GenerateOptions } from 'rxjs/internal/observable/generate';

@Component({
  selector: 'app-generate-operator',
  templateUrl: './generate-operator.component.html',
  styleUrls: ['./generate-operator.component.scss']
})
export class GenerateOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    console.log('Start Scriptioig ');
    

    let generateOptions:GenerateOptions<number,number>={
      initialState:0,
      condition:(x)=>x<3,
      iterate:(x)=>x+1,
      resultSelector:(x)=>x+1000,
      scheduler:asyncScheduler
    }

    let source$ = generate(generateOptions)
    source$.subscribe((data)=>{
      console.log(data);
      
        })
    console.log('end Scriptioig ');

  }

}
