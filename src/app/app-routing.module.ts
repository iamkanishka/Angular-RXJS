import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorsComponent } from './operators/operators.component';
import { BufferComponent } from './operators/pages/buffer/buffer.component';

const routes: Routes = [{
  path:'operators', component:OperatorsComponent, children:[{
    path:'buffer', component:BufferComponent
  }]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
