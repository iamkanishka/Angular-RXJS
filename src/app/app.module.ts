import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewObservableComponent } from './new-observable/new-observable.component';
import { FunctionalObservableComponent } from './components/functional-observable/functional-observable.component';
import { CancellingObservablesComponent } from './components/cancelling-observables/cancelling-observables.component';
import { BasicOperatorsComponent } from './components/basic-operators/basic-operators.component';
import { OperatorsComponent } from './operators/operators.component';
import { BufferComponent } from './operators/pages/buffer/buffer.component';
import { BufferCountComponent } from './operators/pages/buffer-count/buffer-count.component';

@NgModule({
  declarations: [
    AppComponent,
    NewObservableComponent,
    FunctionalObservableComponent,
    CancellingObservablesComponent,
    BasicOperatorsComponent,
    OperatorsComponent,
    BufferComponent,
    BufferCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
