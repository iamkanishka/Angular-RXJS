import { Component, OnInit } from '@angular/core';
import { dematerialize, ObservableNotification, of } from 'rxjs';

@Component({
  selector: 'app-dematerialize-opeartor',
  templateUrl: './dematerialize-opeartor.component.html',
  styleUrls: ['./dematerialize-opeartor.component.scss']
})
export class DematerializeOpeartorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let obsNotification :ObservableNotification<number>[]=[]
  

    for (let index = 0; index <=10; index++) {
    obsNotification.push( {
      kind:"N",
      value:index
    })
      
    }

    of(...obsNotification)
    .pipe(dematerialize())
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
    })
  }

}
