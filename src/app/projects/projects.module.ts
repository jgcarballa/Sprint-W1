import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ViewprojectComponent } from './viewproject/viewproject.component';
import { NewprojectComponent } from './newproject/newproject.component';
import { FilterprojectsFormComponent } from './filterprojects-form/filterprojects-form.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { ViewerprojectFormComponent } from './viewerproject-form/viewerproject-form.component';
import { NewprojectFormComponent } from './newproject-form/newproject-form.component';
import { ProjectserviceService } from './projectservice.service';

@NgModule({
  declarations: [
    ProjectsComponent,
    ViewprojectComponent,
    NewprojectComponent,
    FilterprojectsFormComponent,
    ProjectlistComponent,
    ViewerprojectFormComponent,
    NewprojectFormComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule
  ],
  providers: [
    ProjectserviceService
  ]
})
export class ProjectsModule { }
