import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/timer';

import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
    searchTerm$: Subject<string> = new Subject();
    searchResult$: Observable<any>;
    baseUrl: string = 'https://api.cdnjs.com/libraries?search=';


    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        // this.searchResult$ = this.searchTerm$.asObservable()
        //     // .debounceTime(500)
        //     // .distinctUntilChanged()
        //     // .switchMap((term) => this.searchActualServer$(term))
        //     // .map((res: any) => res.results)

        this.searchTerm$
        .debounceTime(500)
        .distinctUntilChanged()
        .subscribe(res=>{console.log(res)})
        
    }


    keyUp(searchValue) {
        // console.log(searchValue)
        this.searchTerm$.next(searchValue);
    }


    searchActualServer$(term: string) {
        return this.http.get(this.baseUrl + term)
    }

}
