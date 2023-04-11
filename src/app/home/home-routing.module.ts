import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragDropTableComponent } from './components/drag-drop-table/drag-drop-table.component';

const routes: Routes = [
  // {
  //   path: '/',
  //   component: DragDropTableComponent
  // },
  // {
  //   path: '**',
  //   redirectTo: '/',
  //   pathMatch: 'full'
  // }
  { path: '', component: DragDropTableComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
