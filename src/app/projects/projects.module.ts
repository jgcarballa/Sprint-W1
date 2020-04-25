import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ViewprojectComponent } from './viewproject/viewproject.component';
import { NewprojectComponent } from './newproject/newproject.component';
import { FilterprojectsFormComponent } from './filterprojects-form/filterprojects-form.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { ViewerprojectFormComponent } from './viewerproject-form/viewerproject-form.component';
import { NewprojectFormComponent } from './newproject-form/newproject-form.component';
import { ProjectserviceService } from './projectservice.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProjectsInterceptorService } from '../projects/projects-interceptor.service';

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
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ProjectserviceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ProjectsInterceptorService,
      multi: true
    }
  ]
})
export class ProjectsModule { }
