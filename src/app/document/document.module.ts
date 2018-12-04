import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPrestamoComponent } from './form-prestamo/form-prestamo.component';
import { ListPrestamoComponent } from './list-prestamo/list-prestamo.component';

@NgModule({
  declarations: [FormPrestamoComponent, ListPrestamoComponent],
  imports: [
    CommonModule
  ]
})
export class DocumentModule { }
