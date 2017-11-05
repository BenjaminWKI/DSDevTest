import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IMyValue } from './Model/IMyValue.interface'

@Injectable()
export class CounterService {

    constructor(private _http: Http) { };
    getCounter(): Observable<IMyValue> {
        console.log('GetCounter');
        return this._http.get('../api/Counter/').map((response: Response) => <IMyValue>response.json());
    }
    PostIncrement(): Observable<IMyValue>  {
        return this._http.post('../api/Counter/Increment', '').map((response: Response) => <IMyValue>response.json());
    }
    PostDecrement(): Observable<IMyValue>  {
        return this._http.post('../api/Counter/Decrement', '').map((response: Response) => <IMyValue>response.json());
    }
}