import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {


   Operators:any[]=["buffer",
   "bufferCount",
   "bufferTimerCount",
   "bufferToggle",
   "bufferWhen",
   "take",
   "takeLast",
   "takeUntil",
   "takeWhile",
   "skip",
   "skipLast",
   "skipUntil",
   "skipWhile",
   "distint",
   "distintUntilChnaged",
   "distintUntilKeyChnaged",
   "filter",
   "Sample",
   "audit",
   "throttle",
   "first",
   "last",
   "debounce",
   "elementAt",
   "ignoreElements",
   "single",
   "map",
   "mapTo",
   "ajax",
   "mergeMap",
   "mergeMapTo",
   "concatMap",
   "concatMapTo",
   "exhaustMap",
   "switchMap",
   "switchMapTo",
   "subjects",
   "coldObservble",
   "MultiCast",
   "Share",
   "BehaviourSubject",
   "ReplaySubject",
   "AsyncSubject",
   "VoidSubject",
   "publishBehaviour",
   "publishLast",
   "publishReplay",
   "catchError",
   "retry",
   "retryWhen",
   "combineLatest",
   "concat",
   "forkJoin",
   "merge",
   "partition",
   "race",
   "zip",
   "scheduler",
   "defer",
   "range",
   "generate",
   "timer",
   "count",
   "max",
   "min",
   "reduce",
   "isEmpty",
   "FindIndex",
   "Find",
   "every",
   "defaultEmpty",
   "toArray",
   "SubscribeOn",
   "ObserveOn",
   "materialize",
   "dematerialize",
   "delay",
   "combineLatestAll",
   "concatAll",
   "exhaustAll",
   "switchAll",
   



   

];
  constructor() { }

  ngOnInit(): void {


  }

}
