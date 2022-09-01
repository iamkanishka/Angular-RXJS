import { Component, OnInit } from '@angular/core';
import { defaultIfEmpty, of } from 'rxjs';

@Component({
  selector: 'app-default-empty-opeartor',
  templateUrl: './default-empty-opeartor.component.html',
  styleUrls: ['./default-empty-opeartor.component.scss']
})
export class DefaultEmptyOpeartorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let source$ = of(5,10,15,18,20);
   
    source$
    .pipe(defaultIfEmpty(42))
    .subscribe((data)=>console.log(data));

  }

}
