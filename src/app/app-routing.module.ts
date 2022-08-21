import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorsComponent } from './operators/operators.component';
import { BufferCountComponent } from './operators/pages/buffer-count/buffer-count.component';
import { BufferTimerOperatorComponent } from './operators/pages/buffer-timer-operator/buffer-timer-operator.component';
import { BufferToggleOperatorComponent } from './operators/pages/buffer-toggle-operator/buffer-toggle-operator.component';
import { BufferWhenOperatorComponent } from './operators/pages/buffer-when-operator/buffer-when-operator.component';
import { BufferComponent } from './operators/pages/buffer/buffer.component';
import { TakeLastComponent } from './operators/pages/take-last/take-last.component';
import { TakeOperatorComponent } from './operators/pages/take-operator/take-operator.component';

const routes: Routes = [{
  path:'operators', component:OperatorsComponent, children:[
    { path:'buffer', component:BufferComponent,},
    { path:'bufferCount', component: BufferCountComponent,},
    { path:'bufferTimerCount', component: BufferTimerOperatorComponent,},
    { path:'bufferToggle', component: BufferToggleOperatorComponent,},
    { path:'bufferWhen', component: BufferWhenOperatorComponent,},
    { path:'take', component: TakeOperatorComponent,},
    { path:'takeLast', component: TakeLastComponent,},



  
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
