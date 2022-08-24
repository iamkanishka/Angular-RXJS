import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { debounce } from 'rxjs/operators';

@Component({
  selector: 'app-debounceoperator',
  templateUrl: './debounceoperator.component.html',
  styleUrls: ['./debounceoperator.component.scss']
})
export class DebounceoperatorComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {


    // interval(1000).pipe(debounce(value=>interval(value*100))).subscribe((data)=>{
    //   console.log(data);
      
    // })
  }

  ngAfterViewInit(): void {
     let buttonEvent= fromEvent(document.getElementById('debounce')!,'click')
     buttonEvent.pipe(debounce(value=>interval(1000))).subscribe((data)=>{
      console.log(data);
      
    })

  }

}
