import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from '../icon/icon.module';
import { TextModule } from '../text/text.module';
import { UiModule } from '../ui/ui.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';



@NgModule({
  declarations: [HeaderComponent, NavComponent, FooterComponent],
  exports: [UiModule, IconModule, TextModule, HeaderComponent, NavComponent, FooterComponent],
  imports: [
    CommonModule,
    UiModule,
    IconModule,
    TextModule
  ]
})
export class CoreModule { }
