import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { concatMap, exhaustMap, filter, interval, mergeMap, of, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-concatmapmergemapswitchmapexhaustmapclassifieds',
  templateUrl: './concatmapmergemapswitchmapexhaustmapclassifieds.component.html',
  styleUrls: ['./concatmapmergemapswitchmapexhaustmapclassifieds.component.scss']
})
export class ConcatmapmergemapswitchmapexhaustmapclassifiedsComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let postIds = interval(1).pipe(filter((val)=>val>0),take(5))
    postIds
    .pipe(exhaustMap((id)=>{
      return this.http.get('https://jsonplaceholder.typicode.com/posts/'+id)
    }))
    .subscribe((postDetails) => {
      console.log(postDetails);

    })

  }

}
