import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from 'app-routing.module';
import { AppComponent } from 'app.component';
import { NewsFeedComponent } from 'news-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsFeedComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
