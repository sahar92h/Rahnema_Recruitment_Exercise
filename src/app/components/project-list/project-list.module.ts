import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list.component';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {  MatButtonModule } from '@angular/material/button';

const route: Routes = [{ path: '', component: ProjectListComponent }];

@NgModule({
  declarations: [ProjectListComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    RouterModule.forChild(route),
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  exports: [RouterModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule]
})
export class ProjectListModule { }
