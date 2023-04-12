import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MATERIAL_ELEMENTS } from './material';
import { COMPONENTS } from './components';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    LayoutComponent,
    MenuComponent,
    ...COMPONENTS,
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...MATERIAL_ELEMENTS,
  ],
  exports: [
    ...MATERIAL_ELEMENTS,
    ...COMPONENTS
  ]
})
export class SharedModule { }
