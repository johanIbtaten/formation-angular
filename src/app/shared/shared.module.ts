import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { TtcPipe } from './pipes/ttc.pipe';



@NgModule({
  declarations: [TotalPipe, StateDirective, TtcPipe],
  imports: [
    CommonModule
  ],
  exports: [TotalPipe, StateDirective, TtcPipe]
})
export class SharedModule { }
