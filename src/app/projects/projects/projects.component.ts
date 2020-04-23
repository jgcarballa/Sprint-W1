import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Project } from './models/project';
import { ProjectserviceService } from '../projectservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: [
  ]
})
export class ProjectsComponent implements OnInit {
  projectList$: Observable<Project[]>;

  constructor(private projectService: ProjectserviceService) { }

  ngOnInit() {
    this.projectList$ = this.projectService.getProjects();
  }

}
