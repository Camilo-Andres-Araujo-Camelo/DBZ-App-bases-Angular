import { NgModule } from '@angular/core';
import { counterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [counterComponent],
  exports: [counterComponent], // Exponerlo al mundo exterior -> fuera del modulo
})
export class CounterModule {}
