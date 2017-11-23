import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  results:Array<any>=[];

  constructor() { }

  ngOnInit() {
    const obs = Rx.Observable.from(this.arr)
        // .map(x => x*x)
        // .filter( x => x > 40)
        // .take(20)


    obs.subscribe(res => this.results.push(res))




  }

}
