import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MATERIAL_ELEMENTS } from './material';
import { COMPONENTS } from './components';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    LayoutComponent,
    ...COMPONENTS,
   
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ...MATERIAL_ELEMENTS,
    ...COMPONENTS
  ]
})
export class SharedModule { }
