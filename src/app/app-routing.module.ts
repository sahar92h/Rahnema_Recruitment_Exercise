import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import(`./components/project-list/project-list.module`).then(m => m.ProjectListModule)
  },
  {
    path: 'project/:id',
    loadChildren: () => import(`./components/project/project.module`).then(m => m.ProjectModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
