import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Project } from './models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: [
  ]
})
export class ProjectsComponent implements OnInit {
  public projectList: Project[];

  constructor() { }

  ngOnInit() {
    this.projectList = environment.projects;
  }

}
