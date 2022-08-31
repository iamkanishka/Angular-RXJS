import { Component, OnInit } from '@angular/core';
import { min, of } from 'rxjs';

@Component({
  selector: 'app-min-operator',
  templateUrl: './min-operator.component.html',
  styleUrls: ['./min-operator.component.scss']
})
export class MinOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let source$ = of(-1000,-678,1, 2, 3, 4, 5, 6, 7, 8, 9);

    source$
      .pipe(min())
      .subscribe((data) => console.log(data));


    let persons = [
      { age: 25, name: 'Kanishka' },
      { age: 23, name: 'Atomlessmind' },
      { age: 18, name: 'Hotshot' }];

    of(...persons).pipe( min((a, b) => a.age < b.age ? -1 : 1))
      .subscribe(x => console.log(x.name,x.age));
  }

}
