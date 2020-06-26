import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClientsRoutingModule } from './clients-routing.module';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { TemplatesModule } from '../templates/templates.module';
import { TextModule } from '../text/text.module';
import { LibraryModule } from '../library/library.module';
import { SharedModule } from '../shared/shared.module';
import { FormClientComponent } from './components/form-client/form-client.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PageListClientsComponent, FormClientComponent, PageAddClientComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    TemplatesModule,
    TextModule,
    LibraryModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
