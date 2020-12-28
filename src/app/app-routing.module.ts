import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildComponent } from './parent/child/child.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = 
[ 
    { path: 'parent', component: ParentComponent }, 
    { path: 'child', component: ChildComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
