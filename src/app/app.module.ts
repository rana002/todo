import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './Mycomponents/todos/todos.component';
import { TodoItemComponent } from './Mycomponents/todo-item/todo-item.component';
import { AddtodoComponent } from './Mycomponents/addtodo/addtodo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './Mycomponents/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddtodoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
