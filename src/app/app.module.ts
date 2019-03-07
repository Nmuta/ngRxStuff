import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CondorComponent } from './condor/condor.component';
import { FalconComponent } from './falcon/falcon.component';
import { CounterComponent } from './counter/counter.component';
import { ObserveyComponent } from './observey/observey.component';
import { MergemapComponent } from './mergemap/mergemap.component';


@NgModule({
  declarations: [
    AppComponent,
    CondorComponent,
    FalconComponent,
    CounterComponent,
    ObserveyComponent,
    MergemapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
