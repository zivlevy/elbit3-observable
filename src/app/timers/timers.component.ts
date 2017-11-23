import {Component, OnInit} from '@angular/core';
import * as Rx from 'rxjs';
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'app-timers',
    templateUrl: './timers.component.html',
    styleUrls: ['./timers.component.css']
})
export class TimersComponent implements OnInit {
    results: Array<any> = [];
    obsSubscription:Subscription;
    obs = Rx.Observable.interval(1000);
    constructor() {
    }

    ngOnInit() {




    }

    stop(){
        this.obsSubscription.unsubscribe()
        this.obsSubscription = null
    }

    start(){
        if (!this.obsSubscription)
        this.obsSubscription = this.obs.subscribe(res => this.results.push(res))

        // const obs1 = Rx.Observable.interval(500).map(x => 'a'+x)
        // this.obsSubscription= obs1.withLatestFrom(obs).subscribe(res => this.results.push(res))

    }

}
