import { Component, OnInit } from '@angular/core';

import { from, groupBy, mergeMap, of, reduce, toArray } from 'rxjs';

@Component({
  selector: 'app-group-by-operator',
  templateUrl: './group-by-operator.component.html',
  styleUrls: ['./group-by-operator.component.scss']
})
export class GroupByOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let source$ = of(1,2,3,4,5,6,7,8,9)

    let posts =[
      {
        id:1,
        likes:2,
        comments:7
      },
      {
        id:1,
        likes:2,
        comments:7
      },
      {
        id:2,
        likes:7,
        comments:7
      },
      {
        id:2,
        likes:18,
        comments:7
      }

    ]

    // source$
    // .pipe(groupBy(value=>value%2===0))
    // .subscribe((data)=>{
    //   data.pipe(toArray()).subscribe((data)=>{console.log(data);
    //   })
    // console.log(data);
    
    // })


    source$
    .pipe(groupBy(value=>value%2===0),mergeMap((val)=>val.pipe(toArray())))
    .subscribe((data)=>{
     
    console.log(data);
    
    })


    from(posts)
    .pipe(
      groupBy((val) => val.id),
      mergeMap((val) =>
        val.pipe(
          reduce(
            (acc, curr) => {
              acc.id = acc.id || curr.id;
              acc.likes = acc.likes + curr.likes;
              acc.comments = acc.comments + curr.comments;
              return acc;
            },
            { id: 0, likes: 0, comments: 0 }
          )
        )
      )
    )
    .subscribe((data) => {
      console.log(data);
    });
  }

}
