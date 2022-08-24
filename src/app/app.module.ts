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
import { BufferTimerOperatorComponent } from './operators/pages/buffer-timer-operator/buffer-timer-operator.component';
import { BufferToggleOperatorComponent } from './operators/pages/buffer-toggle-operator/buffer-toggle-operator.component';
import { BufferWhenOperatorComponent } from './operators/pages/buffer-when-operator/buffer-when-operator.component';
import { TakeOperatorComponent } from './operators/pages/take-operator/take-operator.component';
import { TakeLastComponent } from './operators/pages/take-last/take-last.component';
import { TakeUntilOperatorComponent } from './operators/pages/take-until-operator/take-until-operator.component';
import { TakeWhileOperatorComponent } from './operators/pages/take-while-operator/take-while-operator.component';
import { SkipOperatorComponent } from './operators/pages/skip-operator/skip-operator.component';
import { SkipLastOperatorComponent } from './operators/pages/skip-last-operator/skip-last-operator.component';
import { SkipUntilOperatorComponent } from './operators/pages/skip-until-operator/skip-until-operator.component';
import { SkipWhileOperatorComponent } from './operators/pages/skip-while-operator/skip-while-operator.component';
import { DistintOperatorComponent } from './operators/pages/distint-operator/distint-operator.component';
import { DistintUntilChnagedOperatorComponent } from './operators/pages/distint-until-chnaged-operator/distint-until-chnaged-operator.component';
import { DistintUntilKeyChnagedOperatorComponent } from './operators/pages/distint-until-key-chnaged-operator/distint-until-key-chnaged-operator.component';
import { FilterOperatorComponent } from './operators/pages/filter-operator/filter-operator.component';
import { SampleoperatorComponent } from './operators/pages/sampleoperator/sampleoperator.component';
import { AuditoperatorComponent } from './operators/pages/auditoperator/auditoperator.component';
import { ThrottleoperatorComponent } from './operators/pages/throttleoperator/throttleoperator.component';
import { FirstoperatorComponent } from './operators/pages/firstoperator/firstoperator.component';
import { LasttoperatorComponent } from './operators/pages/lasttoperator/lasttoperator.component';
import { DebounceoperatorComponent } from './operators/pages/debounceoperator/debounceoperator.component';
import { ElementAtoperatorComponent } from './operators/pages/element-atoperator/element-atoperator.component';
import { IgnoreElementsoperatorComponent } from './operators/pages/ignore-elementsoperator/ignore-elementsoperator.component';

@NgModule({
  declarations: [
    AppComponent,
    NewObservableComponent,
    FunctionalObservableComponent,
    CancellingObservablesComponent,
    BasicOperatorsComponent,
    OperatorsComponent,
    BufferComponent,
    BufferCountComponent,
    BufferTimerOperatorComponent,
    BufferToggleOperatorComponent,
    BufferWhenOperatorComponent,
    TakeOperatorComponent,
    TakeLastComponent,
    TakeUntilOperatorComponent,
    TakeWhileOperatorComponent,
    SkipOperatorComponent,
    SkipLastOperatorComponent,
    SkipUntilOperatorComponent,
    SkipWhileOperatorComponent,
    DistintOperatorComponent,
    DistintUntilChnagedOperatorComponent,
    DistintUntilKeyChnagedOperatorComponent,
    FilterOperatorComponent,
    SampleoperatorComponent,
    AuditoperatorComponent,
    ThrottleoperatorComponent,
    FirstoperatorComponent,
    LasttoperatorComponent,
    DebounceoperatorComponent,
    ElementAtoperatorComponent,
    IgnoreElementsoperatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
