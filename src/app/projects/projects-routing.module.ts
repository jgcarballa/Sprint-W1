import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ViewprojectComponent } from './viewproject/viewproject.component';
import { NewprojectComponent } from './newproject/newproject.component';


const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
  },
  {
    path: 'viewproject/:id',
    component: ViewprojectComponent
  },
  {
    path: 'newproject',
    component: NewprojectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
