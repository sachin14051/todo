import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodolistComponent } from './shared/components/todolist/todolist.component';
import { TodoformComponent } from './shared/components/todoform/todoform.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoformComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
