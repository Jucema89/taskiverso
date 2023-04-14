import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MATERIAL_ELEMENTS } from './material';
import { COMPONENTS } from './components';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LayoutComponent,
    MenuComponent,
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    ...MATERIAL_ELEMENTS,
  ],
  exports: [
    ...MATERIAL_ELEMENTS,
    ...COMPONENTS,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
