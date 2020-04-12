import { Component, OnInit } from '@angular/core';
import { Project } from '../projects/models/project';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styles: [
  ]
})
export class NewprojectComponent implements OnInit {
  public project: Project;
  public projects: Project[] = environment.projects;
  public numProjects = environment.projects.length - 1;

  constructor() { }

  ngOnInit(): void {
    this.project = {
      id: this.numProjects + 1,
      name: ''
    };
  }

  public saveProject() {
    this.projects.push({ ...this.project});
    this.project.id = this.project.id + 1;
  }

}
