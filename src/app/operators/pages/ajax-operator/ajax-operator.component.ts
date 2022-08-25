import { Component, OnInit } from '@angular/core';
import {ajax} from 'rxjs/ajax'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-ajax-operator',
  templateUrl: './ajax-operator.component.html',
  styleUrls: ['./ajax-operator.component.scss']
})
export class AjaxOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    ajax('https://jsonplaceholder.typicode.com/posts')
    // .pipe(map((response)=>{
    //    let data = [];
    //    for(let post of response.response){
    //     data.push(post.title)
    //    }
    //    return data
    // }))
    .subscribe((data)=>{
      console.log(data);
      
    })


    ajax.getJSON('https://jsonplaceholder.typicode.com/posts').subscribe((data)=>{
      console.log(data);
      
    })

    ajax({
      url:'https://jsonplaceholder.typicode.com/posts',
      method:'POST',
      headers:{
        'content-type':'application/json',
        leela:'kanishka web dev'},
      body:{title:'Kanishka web dev'}
    }).subscribe((data)=>{
      console.log(data);
      
    })
  }

}
