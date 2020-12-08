import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './container/app/app.component';
import { HomeworkComponent } from './component/homework/homework.component';
import { HomenewComponent } from './component/homenew/homenew.component';
import { WorldComponent } from './component/world/world.component';
import { Document1Component } from './component/document1/document1.component';
import { Document2Component } from './component/document2/document2.component';
import { Document3Component } from './component/document3/document3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeworkComponent,
    HomenewComponent,
    WorldComponent,
    Document1Component,
    Document2Component,
    Document3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
