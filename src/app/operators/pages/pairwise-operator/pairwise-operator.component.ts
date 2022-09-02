import { Component, OnInit } from '@angular/core';
import { of, pairwise } from 'rxjs';

@Component({
  selector: 'app-pairwise-operator',
  templateUrl: './pairwise-operator.component.html',
  styleUrls: ['./pairwise-operator.component.scss']
})
export class PairwiseOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // let source$ = of(1,2,3,4,5,6)
    let source$ = of(1)


    source$
    .pipe(pairwise())
    .subscribe({
      next: (data) =>  {console.log(data)},
      error: (error) =>{console.log( error) },
      complete:()=>{console.log('complete')}
      } )
  }

}
