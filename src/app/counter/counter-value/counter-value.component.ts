import { Component, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-counter-value',
  standalone: true,
  imports: [],
  templateUrl: './counter-value.component.html',
  styleUrl: './counter-value.component.css'
})
export class CounterValueComponent {
  @Input() counter_value = 0;
  counter: number = 0;
  ngOnChanges(changes: SimpleChanges){
    //console.log(changes);
    this.counter = this.counter_value;
  }
}
