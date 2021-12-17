import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableroComponent } from './components/tablero/tablero.component';
import { ForPipe } from './pipes/for.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableroComponent,
    ForPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
