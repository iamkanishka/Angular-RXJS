import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { bufferCount } from 'rxjs/operators';

@Component({
  selector: 'app-buffer-count',
  templateUrl: './buffer-count.component.html',
  styleUrls: ['./buffer-count.component.scss']
})
export class BufferCountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //of(1,2,3,4)
    // interval(1000)
    // .pipe(bufferCount(3)).subscribe((data)=>{
    //   console.log(data);
      
    // })

    // interval(1000)
    // .pipe(bufferCount(3,2)).subscribe((data)=>{
    //   console.log(data);
      
    // })
  }

}
