import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {


   Operators:any[]=["buffer","bufferCount","bufferTimerCount","bufferToggle","bufferWhen","take"]
  constructor() { }

  ngOnInit(): void {


  }

}
