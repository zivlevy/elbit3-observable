import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

    constructor() {
        const obs = Rx.Observable.fromEvent(document, 'mousemove')
            // .throttleTime(500)
            // .map((e: MouseEvent) => e.clientX)
            // .filter(res => res > 10)
            .subscribe(e => console.log(e));
    }


  ngOnInit() {
  }

}
