import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './component/parent/parent.component';
import { SiblingComponent } from './component/sibling/sibling.component';
import { DataService } from './service/data.service';
import { Parent1Component } from './component/parent1/parent1.component';
import { Sibling1Component } from './component/sibling1/sibling1.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    SiblingComponent,
    Parent1Component,
    Sibling1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class  AppModule { }
