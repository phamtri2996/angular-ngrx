import { Component } from '@angular/core';
import { CounterButtonComponent } from "../counter-button/counter-button.component";
import { CounterValueComponent } from "../counter-value/counter-value.component";

@Component({
    selector: 'app-counter',
    standalone: true,
    templateUrl: './counter.component.html',
    styleUrl: './counter.component.css',
    imports: [CounterButtonComponent, CounterValueComponent]
})
export class CounterComponent {
    counter: number = 0;
    onIncrement(){
        this.counter++;
    }
    onDecrement(){
        this.counter--;
    }
    onReset(){
        this.counter = 0;
    }
}
