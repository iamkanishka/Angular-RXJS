import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OperatorsComponent } from './operators/operators.component';
import { AjaxOperatorComponent } from './operators/pages/ajax-operator/ajax-operator.component';
import { AsyncsubjectOperatorComponent } from './operators/pages/asyncsubject-operator/asyncsubject-operator.component';
import { AuditoperatorComponent } from './operators/pages/auditoperator/auditoperator.component';
import { BehavioursubjectOperatorComponent } from './operators/pages/behavioursubject-operator/behavioursubject-operator.component';
import { BufferCountComponent } from './operators/pages/buffer-count/buffer-count.component';
import { BufferTimerOperatorComponent } from './operators/pages/buffer-timer-operator/buffer-timer-operator.component';
import { BufferToggleOperatorComponent } from './operators/pages/buffer-toggle-operator/buffer-toggle-operator.component';
import { BufferWhenOperatorComponent } from './operators/pages/buffer-when-operator/buffer-when-operator.component';
import { BufferComponent } from './operators/pages/buffer/buffer.component';
import { CatchErrorOperatorComponent } from './operators/pages/catch-error-operator/catch-error-operator.component';
import { ColdObservableComponent } from './operators/pages/cold-observable/cold-observable.component';
import { CombineLatestComponent } from './operators/pages/combine-latest/combine-latest.component';
import { ConcatMapToComponent } from './operators/pages/concat-map-to/concat-map-to.component';
import { ConcatMapComponent } from './operators/pages/concat-map/concat-map.component';
import { DebounceoperatorComponent } from './operators/pages/debounceoperator/debounceoperator.component';
import { DistintOperatorComponent } from './operators/pages/distint-operator/distint-operator.component';
import { DistintUntilChnagedOperatorComponent } from './operators/pages/distint-until-chnaged-operator/distint-until-chnaged-operator.component';
import { DistintUntilKeyChnagedOperatorComponent } from './operators/pages/distint-until-key-chnaged-operator/distint-until-key-chnaged-operator.component';
import { ElementAtoperatorComponent } from './operators/pages/element-atoperator/element-atoperator.component';
import { ExhaustMapComponent } from './operators/pages/exhaust-map/exhaust-map.component';
import { FilterOperatorComponent } from './operators/pages/filter-operator/filter-operator.component';
import { FirstoperatorComponent } from './operators/pages/firstoperator/firstoperator.component';
import { IgnoreElementsoperatorComponent } from './operators/pages/ignore-elementsoperator/ignore-elementsoperator.component';
import { LasttoperatorComponent } from './operators/pages/lasttoperator/lasttoperator.component';
import { MapOperatorComponent } from './operators/pages/map-operator/map-operator.component';
import { MapToOperatorComponent } from './operators/pages/map-to-operator/map-to-operator.component';
import { MergeMapOperatorComponent } from './operators/pages/merge-map-operator/merge-map-operator.component';
import { MergemapToComponent } from './operators/pages/mergemap-to/mergemap-to.component';
import { MultiCastComponent } from './operators/pages/multi-cast/multi-cast.component';
import { PublishBehaviourOperatorComponent } from './operators/pages/publish-behaviour-operator/publish-behaviour-operator.component';
import { PublishLastComponent } from './operators/pages/publish-last/publish-last.component';
import { PublishReplayComponent } from './operators/pages/publish-replay/publish-replay.component';
import { ReplaysubjectOperatorComponent } from './operators/pages/replaysubject-operator/replaysubject-operator.component';
import { RetryOperatorComponent } from './operators/pages/retry-operator/retry-operator.component';
import { RetryWhenComponent } from './operators/pages/retry-when/retry-when.component';
import { SampleoperatorComponent } from './operators/pages/sampleoperator/sampleoperator.component';
import { ShareOperatorComponent } from './operators/pages/share-operator/share-operator.component';
import { SingleoperatorComponent } from './operators/pages/singleoperator/singleoperator.component';
import { SkipLastOperatorComponent } from './operators/pages/skip-last-operator/skip-last-operator.component';
import { SkipOperatorComponent } from './operators/pages/skip-operator/skip-operator.component';
import { SkipUntilOperatorComponent } from './operators/pages/skip-until-operator/skip-until-operator.component';
import { SkipWhileOperatorComponent } from './operators/pages/skip-while-operator/skip-while-operator.component';
import { SubjectComponent } from './operators/pages/subject/subject.component';
import { SwitchMapToComponent } from './operators/pages/switch-map-to/switch-map-to.component';
import { SwitchMapComponent } from './operators/pages/switch-map/switch-map.component';
import { TakeLastComponent } from './operators/pages/take-last/take-last.component';
import { TakeOperatorComponent } from './operators/pages/take-operator/take-operator.component';
import { TakeUntilOperatorComponent } from './operators/pages/take-until-operator/take-until-operator.component';
import { TakeWhileOperatorComponent } from './operators/pages/take-while-operator/take-while-operator.component';
import { ThrottleoperatorComponent } from './operators/pages/throttleoperator/throttleoperator.component';
import { VoidsubjectOperatorComponent } from './operators/pages/voidsubject-operator/voidsubject-operator.component';

const routes: Routes = [{
  path:'operators', component:OperatorsComponent, children:[
    { path:'buffer', component:BufferComponent,},
    { path:'bufferCount', component: BufferCountComponent,},
    { path:'bufferTimerCount', component: BufferTimerOperatorComponent,},
    { path:'bufferToggle', component: BufferToggleOperatorComponent,},
    { path:'bufferWhen', component: BufferWhenOperatorComponent,},
    { path:'take', component: TakeOperatorComponent,},
    { path:'takeLast', component: TakeLastComponent,},
    { path:'takeUntil', component: TakeUntilOperatorComponent,},
    { path:'takeWhile', component: TakeWhileOperatorComponent,},
    { path:'skip', component: SkipOperatorComponent,},
    { path:'skipLast', component: SkipLastOperatorComponent,},
    { path:'skipUntil', component: SkipUntilOperatorComponent,},
    { path:'skipWhile', component: SkipWhileOperatorComponent,},
    { path:'distint', component: DistintOperatorComponent,},
    { path:'distintUntilChnaged', component: DistintUntilChnagedOperatorComponent,},
    { path:'distintUntilKeyChnaged', component: DistintUntilKeyChnagedOperatorComponent,},
    { path:'filter', component: FilterOperatorComponent,},
    { path:'Sample', component: SampleoperatorComponent,},
    { path:'audit', component: AuditoperatorComponent,},
    { path:'throttle', component: ThrottleoperatorComponent,},
    { path:'first', component: FirstoperatorComponent,},
    { path:'last', component: LasttoperatorComponent,},
    { path:'debounce', component: DebounceoperatorComponent,},
    { path:'elementAt', component: ElementAtoperatorComponent,},
    { path:'ignoreElements', component: IgnoreElementsoperatorComponent,},
    { path:'single', component: SingleoperatorComponent,},
    { path:'map', component: MapOperatorComponent,},
    { path:'mapTo', component: MapToOperatorComponent,},
    { path:'ajax', component: AjaxOperatorComponent,},
    { path:'mergeMap', component: MergeMapOperatorComponent,},
    { path:'mergeMapTo', component: MergemapToComponent,},
    { path:'concatMap', component: ConcatMapComponent,},
    { path:'concatMapTo', component: ConcatMapToComponent,},
    { path:'exhaustMap', component: ExhaustMapComponent,},
    { path:'switchMap', component: SwitchMapComponent,},
    { path:'switchMapTo', component: SwitchMapToComponent,},
    { path:'subjects', component: SubjectComponent,},
    { path:'coldObservble', component: ColdObservableComponent,},
    { path:'MultiCast', component: MultiCastComponent,},
    { path:'Share', component: ShareOperatorComponent,},
    { path:'BehaviourSubject', component: BehavioursubjectOperatorComponent,},
    { path:'ReplaySubject', component: ReplaysubjectOperatorComponent,},
    { path:'AsyncSubject', component: AsyncsubjectOperatorComponent,},
    { path:'VoidSubject', component: VoidsubjectOperatorComponent,},
    { path:'publishBehaviour', component: PublishBehaviourOperatorComponent,},
    { path:'publishLast', component: PublishLastComponent,},
    { path:'publishReplay', component: PublishReplayComponent,},
    { path:'catchError', component: CatchErrorOperatorComponent,},
    { path:'retry', component: RetryOperatorComponent,},
    { path:'retryWhen', component: RetryWhenComponent,},
    { path:'combineLatest', component: CombineLatestComponent,},






  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
