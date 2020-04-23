import { Component, OnInit } from '@angular/core';
import { Project } from '../projects/models/project';
import { environment } from 'src/environments/environment';
import { ProjectserviceService } from '../projectservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styles: [
  ]
})
export class NewprojectComponent implements OnInit {
  titulo = 'Nuevo proyecto';
  legend = 'Formulario de Proyecto';
  projects$: Observable<Project[]>;

  public project: Project =
  {
    name: ''
  };

  constructor(private projectService: ProjectserviceService) { }

  ngOnInit() {
    this.countProjects();
  }
  public createProject(event: string, id: number){
    this.project.id = id;
    this.project.name = event;
    this.projectService.postProjects(this.project);
  }

  countProjects() {
    this.projects$ = this.projectService.getProjects();
  }
}
