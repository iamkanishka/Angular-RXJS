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
import { SingleoperatorComponent } from './operators/pages/singleoperator/singleoperator.component';
import { MapOperatorComponent } from './operators/pages/map-operator/map-operator.component';
import { MapToOperatorComponent } from './operators/pages/map-to-operator/map-to-operator.component';
import { AjaxOperatorComponent } from './operators/pages/ajax-operator/ajax-operator.component';
import { MergeMapOperatorComponent } from './operators/pages/merge-map-operator/merge-map-operator.component';
import { MergemapToComponent } from './operators/pages/mergemap-to/mergemap-to.component';
import { ConcatMapComponent } from './operators/pages/concat-map/concat-map.component';
import { ConcatMapToComponent } from './operators/pages/concat-map-to/concat-map-to.component';
import { ExhaustMapComponent } from './operators/pages/exhaust-map/exhaust-map.component';
import { SwitchMapComponent } from './operators/pages/switch-map/switch-map.component';
import { SwitchMapToComponent } from './operators/pages/switch-map-to/switch-map-to.component';
import { SubjectComponent } from './operators/pages/subject/subject.component';
import { ColdObservableComponent } from './operators/pages/cold-observable/cold-observable.component';
import { MultiCastComponent } from './operators/pages/multi-cast/multi-cast.component';
import { ShareOperatorComponent } from './operators/pages/share-operator/share-operator.component';
import { BehavioursubjectOperatorComponent } from './operators/pages/behavioursubject-operator/behavioursubject-operator.component';
import { ReplaysubjectOperatorComponent } from './operators/pages/replaysubject-operator/replaysubject-operator.component';
import { AsyncsubjectOperatorComponent } from './operators/pages/asyncsubject-operator/asyncsubject-operator.component';
import { VoidsubjectOperatorComponent } from './operators/pages/voidsubject-operator/voidsubject-operator.component';
import { PublishBehaviourOperatorComponent } from './operators/pages/publish-behaviour-operator/publish-behaviour-operator.component';
import { PublishLastComponent } from './operators/pages/publish-last/publish-last.component';
import { PublishReplayComponent } from './operators/pages/publish-replay/publish-replay.component';
import { CatchErrorOperatorComponent } from './operators/pages/catch-error-operator/catch-error-operator.component';
import { RetryOperatorComponent } from './operators/pages/retry-operator/retry-operator.component';
import { RetryWhenComponent } from './operators/pages/retry-when/retry-when.component';
import { CombineLatestComponent } from './operators/pages/combine-latest/combine-latest.component';
import { ConcatOperatorComponent } from './operators/pages/concat-operator/concat-operator.component';
import { ForkJoinOperatorComponent } from './operators/pages/fork-join-operator/fork-join-operator.component';
import { MergeOperatorComponent } from './operators/pages/merge-operator/merge-operator.component';
import { PartitionOperatorComponent } from './operators/pages/partition-operator/partition-operator.component';
import { RaceComponent } from './operators/pages/race/race.component';
import { ZipoperatorComponent } from './operators/pages/zipoperator/zipoperator.component';
import { SchedulersComponent } from './operators/pages/schedulers/schedulers.component';
import { DeferOperatorComponent } from './operators/pages/defer-operator/defer-operator.component';
import { RangeOperatorComponent } from './operators/pages/range-operator/range-operator.component';
import { GenerateOperatorComponent } from './operators/pages/generate-operator/generate-operator.component';
import { TimerOperatorComponent } from './operators/pages/timer-operator/timer-operator.component';
import { CountOperatorComponent } from './operators/pages/count-operator/count-operator.component';
import { MaxOperatorComponent } from './operators/pages/max-operator/max-operator.component';
import { MinOperatorComponent } from './operators/pages/min-operator/min-operator.component';
import { ReduceOperatorComponent } from './operators/pages/reduce-operator/reduce-operator.component';
import { IsemptyOperatorComponent } from './operators/pages/isempty-operator/isempty-operator.component';
import { FindIndexOperatorComponent } from './operators/pages/find-index-operator/find-index-operator.component';
import { FindOperatorComponent } from './operators/pages/find-operator/find-operator.component';
import { EveryOperatorComponent } from './operators/pages/every-operator/every-operator.component';
import { DefaultEmptyOpeartorComponent } from './operators/pages/default-empty-opeartor/default-empty-opeartor.component';
import { ToArrayOpeartorComponent } from './operators/pages/to-array-opeartor/to-array-opeartor.component';
import { SubscribeOnOpeartorComponent } from './operators/pages/subscribe-on-opeartor/subscribe-on-opeartor.component';
import { ObserveOnOpeartorComponent } from './operators/pages/observe-on-opeartor/observe-on-opeartor.component';
import { MaterializeOpeartorComponent } from './operators/pages/materialize-opeartor/materialize-opeartor.component';
import { DematerializeOpeartorComponent } from './operators/pages/dematerialize-opeartor/dematerialize-opeartor.component';
import { DelayOpeartorComponent } from './operators/pages/delay-opeartor/delay-opeartor.component';
import { CombineLatestAllOpeartorComponent } from './operators/pages/combine-latest-all-opeartor/combine-latest-all-opeartor.component';
import { ConcatAllOpeartorComponent } from './operators/pages/concat-all-opeartor/concat-all-opeartor.component';
import { ExhaustAllOpeartorComponent } from './operators/pages/exhaust-all-opeartor/exhaust-all-opeartor.component';
import { SwitchAllComponent } from './operators/pages/switch-all/switch-all.component';
import { MergeAllOperatorComponent } from './operators/pages/merge-all-operator/merge-all-operator.component';
import { StartwithOperatorComponent } from './operators/pages/startwith-operator/startwith-operator.component';
import { WithLatestFromOperatorComponent } from './operators/pages/with-latest-from-operator/with-latest-from-operator.component';
import { GroupByOperatorComponent } from './operators/pages/group-by-operator/group-by-operator.component';
import { PairwiseOperatorComponent } from './operators/pages/pairwise-operator/pairwise-operator.component';
import { WindowOperatorComponent } from './operators/pages/window-operator/window-operator.component';
import { WindowCountOperatorComponent } from './operators/pages/window-count-operator/window-count-operator.component';
import { WindowTimeOperatorComponent } from './operators/pages/window-time-operator/window-time-operator.component';
import { WindowToggleOperatorComponent } from './operators/pages/window-toggle-operator/window-toggle-operator.component';
import { WindowWhenOperatorComponent } from './operators/pages/window-when-operator/window-when-operator.component';
import { MergeclassifiedsComponent } from './operators/pages/mergeclassifieds/mergeclassifieds.component';
import { ConcatclassifiedsComponent } from './operators/pages/concatclassifieds/concatclassifieds.component';
import { ConcatmapmergemapswitchmapexhaustmapclassifiedsComponent } from './operators/pages/concatmapmergemapswitchmapexhaustmapclassifieds/concatmapmergemapswitchmapexhaustmapclassifieds.component';
 import {HttpClientModule} from '@angular/common/http';
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
    IgnoreElementsoperatorComponent,
    SingleoperatorComponent,
    MapOperatorComponent,
    MapToOperatorComponent,
    AjaxOperatorComponent,
    MergeMapOperatorComponent,
    MergemapToComponent,
    ConcatMapComponent,
    ConcatMapToComponent,
    ExhaustMapComponent,
    SwitchMapComponent,
    SwitchMapToComponent,
    SubjectComponent,
    ColdObservableComponent,
    MultiCastComponent,
    ShareOperatorComponent,
    BehavioursubjectOperatorComponent,
    ReplaysubjectOperatorComponent,
    AsyncsubjectOperatorComponent,
    VoidsubjectOperatorComponent,
    PublishBehaviourOperatorComponent,
    PublishLastComponent,
    PublishReplayComponent,
    CatchErrorOperatorComponent,
    RetryOperatorComponent,
    RetryWhenComponent,
    CombineLatestComponent,
    ConcatOperatorComponent,
    ForkJoinOperatorComponent,
    MergeOperatorComponent,
    PartitionOperatorComponent,
    RaceComponent,
    ZipoperatorComponent,
    SchedulersComponent,
    DeferOperatorComponent,
    RangeOperatorComponent,
    GenerateOperatorComponent,
    TimerOperatorComponent,
    CountOperatorComponent,
    MaxOperatorComponent,
    MinOperatorComponent,
    ReduceOperatorComponent,
    IsemptyOperatorComponent,
    FindIndexOperatorComponent,
    FindOperatorComponent,
    EveryOperatorComponent,
    DefaultEmptyOpeartorComponent,
    ToArrayOpeartorComponent,
    SubscribeOnOpeartorComponent,
    ObserveOnOpeartorComponent,
    MaterializeOpeartorComponent,
    DematerializeOpeartorComponent,
    DelayOpeartorComponent,
    CombineLatestAllOpeartorComponent,
    ConcatAllOpeartorComponent,
    ExhaustAllOpeartorComponent,
    SwitchAllComponent,
    MergeAllOperatorComponent,
    StartwithOperatorComponent,
    WithLatestFromOperatorComponent,
    GroupByOperatorComponent,
    PairwiseOperatorComponent,
    WindowOperatorComponent,
    WindowCountOperatorComponent,
    WindowTimeOperatorComponent,
    WindowToggleOperatorComponent,
    WindowWhenOperatorComponent,
    MergeclassifiedsComponent,
    ConcatclassifiedsComponent,
    ConcatmapmergemapswitchmapexhaustmapclassifiedsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
