import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Project } from '../projects/models/project';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styles: [
  ]
})
export class ProjectlistComponent implements OnInit {

  @Input () public projectList: Project[];
  public showProjects: Project[];

  constructor() { }

  ngOnInit() {
    this.showProjects = this.projectList;
  }

  filtrarProyectos(event: string) {
    const minusculas = event.toLowerCase();
    console.log(this.projectList.filter(p =>p.name.toLowerCase().includes(minusculas)));
    this.showProjects = this.projectList.filter(p => p.name.toLowerCase().includes(minusculas));
  }
}
