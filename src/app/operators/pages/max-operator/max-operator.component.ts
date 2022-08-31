import { Component, OnInit } from '@angular/core';
import { max, of } from 'rxjs';

@Component({
  selector: 'app-max-operator',
  templateUrl: './max-operator.component.html',
  styleUrls: ['./max-operator.component.scss']
})
export class MaxOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let source$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9);

    source$
      .pipe(max())
      .subscribe((data) => console.log(data));


    let persons = [
      { age: 25, name: 'Kanishka' },
      { age: 23, name: 'Atomlessmind' },
      { age: 18, name: 'Hotshot' }];

    of(...persons).pipe( max((a, b) => a.age < b.age ? -1 : 1))
      .subscribe(x => console.log(x.name,x.age));

  }

}
