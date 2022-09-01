import { Component, OnInit } from '@angular/core';
import { map, materialize, of } from 'rxjs';

@Component({
  selector: 'app-materialize-opeartor',
  templateUrl: './materialize-opeartor.component.html',
  styleUrls: ['./materialize-opeartor.component.scss']
})
export class MaterializeOpeartorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const source$ = of(1,2,3,4,5,6,7);
   

    source$
    .pipe(
      //map((data)=>{throw 'Caught Error'}),
      materialize())
    .subscribe({
      next: (data) => {
        console.log(data);

      },
      error: (error) => {
        console.log(error);

      },
      complete: () => {
        console.log('Complete');

      }
    });
  }

}
