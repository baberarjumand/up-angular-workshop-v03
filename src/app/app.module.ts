import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { A1Component } from './pages/a1/a1.component';
import { A2Component } from './pages/a2/a2.component';
import { B1Component } from './pages/b1/b1.component';
import { B2Component } from './pages/b2/b2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    A1Component,
    A2Component,
    B1Component,
    B2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
