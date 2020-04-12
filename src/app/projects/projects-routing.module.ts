import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ViewprojectComponent } from './viewproject/viewproject.component';


const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent
  },
  {
    path: 'viewproject/:id',
    component: ViewprojectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
