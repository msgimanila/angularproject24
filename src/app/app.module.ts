import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import NewsFeed from '.NewsFeed';

import { AppRoutingModule } from 'app-routing.module';
import { AppComponent } from 'app.component';

@NgModule({
  declarations: [
    AppComponent
    NewsFeed
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
