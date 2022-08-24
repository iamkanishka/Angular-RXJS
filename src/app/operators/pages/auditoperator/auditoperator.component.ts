import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { audit } from 'rxjs/operators';

@Component({
  selector: 'app-auditoperator',
  templateUrl: './auditoperator.component.html',
  styleUrls: ['./auditoperator.component.scss']
})
export class AuditoperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    interval(1000).pipe(audit((val)=>interval(2000))).subscribe((data)=>{
      console.log(data);
      
    })
  }

}
