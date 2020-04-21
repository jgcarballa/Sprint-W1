import { Component, OnInit } from '@angular/core';
import { Project } from '../projects/models/project';
import { environment } from 'src/environments/environment';
import { ProjectserviceService } from '../projectservice.service';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styles: [
  ]
})
export class NewprojectComponent implements OnInit {
  titulo = 'Nuevo proyecto';
  legend = 'Formulario de Proyecto';
  numProjects = environment.projects.length - 1;

  public project: Project =
  {
    id: this.projectService.countProjects(this.numProjects),
    name: ''
  };
  projects = environment.projects;

  constructor(private projectService: ProjectserviceService) { }

  ngOnInit(): void {
  }
  public createProject(event: string){
    this.project.id = this.projectService.countProjects(this.numProjects);
    this.project.name = event;
    this.projectService.createProject(this.project, this.projects);
    this.project.id = this.projectService.increaseId(this.project);
  }

  /*public saveProject(){
    this.projectService.createProject(this.project, this.projects);
    this.project.id = this.projectService.increaseId(this.project);
  }*/
}
