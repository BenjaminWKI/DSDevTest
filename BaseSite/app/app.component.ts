import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { CounterService } from './counter.service';
import { IMyValue } from './Model/IMyValue.interface'

@Component({
    selector: 'ben-Angular',
    templateUrl: './app/Counter/AngularCounter.component.html',
    providers: [CounterService]
})
export class AppComponent implements OnInit {
    public Counter = 0;

    constructor(private _counterService: CounterService) { }

    ngOnInit(): void {
        this._counterService.getCounter()
            .subscribe(this.UpdateCounter.bind(this), error => console.error(<any>error));
    };
    IncrementCounter(): void {
        console.log('IncrementCounter()');
        this._counterService.PostIncrement().subscribe(this.UpdateCounter.bind(this));
    }
    DecrementCounter(): void {
        console.log('DecrementCounter()');
        this._counterService.PostDecrement().subscribe(this.UpdateCounter.bind(this));
    }

    private UpdateCounter(val: IMyValue): void{
        this.Counter = val.currentNumber;
        console.log('Counter:' + this.Counter);
    }
}