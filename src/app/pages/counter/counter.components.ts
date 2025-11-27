import { Component, signal } from "@angular/core";

@Component({
  templateUrl: './counter.components.html',
  styles: 'button { margin-right: 5px; padding: 10px; font-size: 16px; margin: 5px 10px;  }',

})
export class CounterComponent {
  public counter: number = 10;
  counterSgin = signal(10);

  increaseBy(value: number): void {
    this.counter += value;
    // Actualización del signal
    //this.counterSgin.set(this.counterSgin() + value);
    // la forma recomendada de actualizar un signal
    this.counterSgin.update( current => current + value);
  }

  resetCounter(): void {
    this.counter = 0;
    // Reset del signal
    this.counterSgin.set(0);

  }

  decreaseBy(value: number): void {
    this.counter -= value;
  }
}
