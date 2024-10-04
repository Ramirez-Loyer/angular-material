import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos empleados de ANgular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';




const MaterialComponents=[
  MatToolbarModule, 
  MatButtonModule, 
  MatIconModule,
  MatCardModule, 
  MatAutocompleteModule, 
  MatInputModule, 
  MatFormFieldModule,
  MatTableModule, 
  MatGridListModule,
  MatProgressSpinnerModule
]

@NgModule({
 
  imports: [MaterialComponents], 
  exports: [MaterialComponents], 
})
export class AngularMaterialModule { }
