import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from '../icon/icon.module';
import { TextModule } from '../text/text.module';
import { UiModule } from '../ui/ui.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { LoginModule } from '../login/login.module';
import { LibraryModule } from '../library/library.module';



@NgModule({
  declarations: [HeaderComponent, NavComponent, FooterComponent],
  exports: [LoginModule, UiModule, IconModule, TextModule, HeaderComponent, NavComponent, FooterComponent],
  imports: [
    CommonModule,
    UiModule,
    IconModule,
    TextModule,
    RouterModule,
    LoginModule,
    LibraryModule
  ]
})
export class CoreModule { }
