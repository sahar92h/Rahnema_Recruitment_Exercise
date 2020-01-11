import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FakeProjectService } from 'src/app/services/project.service';
import { AbstractProjectService } from 'src/app/services/project.service.abstract';
const route: Routes = [{ path: '', component: ProjectComponent }];

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    RouterModule.forChild(route)
  ],
  providers: [
    {provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }}
  ],
  exports: [RouterModule, MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule]
})
export class ProjectModule { }
