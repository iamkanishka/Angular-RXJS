import { Component, OnInit } from '@angular/core';

import { delay, of, retry, retryWhen, tap } from 'rxjs';

@Component({
  selector: 'app-retry-when',
  templateUrl: './retry-when.component.html',
  styleUrls: ['./retry-when.component.scss']
})
export class RetryWhenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let usersData = {
      responseStatus: '500',
      users: [
        { id: 1, name: "Kansihka Naik" },
        { id: 2, name: "Kansihka Naik" },
        { id: 3, name: "Kansihka " },
        { id: 4, name: "Kansihka B C" },
        { id: 5, name: "Hothsot" },
        { id: 6, name: "Atomlessmind" },
        { id: 7, name: "Deadly Feet" },

      ]
    }

    of(...usersData.users)
    .pipe(
      delay(1000),
      tap((user) => {
        if (!usersData.responseStatus.startsWith('2')) {
          throw usersData.responseStatus;
        }
      }),
      retryWhen((error) => {
        return error.pipe(
          tap((status) => {
            if (!status.startsWith('5')) {
              throw 'error';
            }
            console.log('retrying');
          })
        );
      })
    )
    .subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
    });

  setTimeout(() => {
    if (Math.random() < 0.5) {
      usersData.responseStatus = '200';
    } else {
      usersData.responseStatus = '400';
    }
  }, 5000);
}

}
