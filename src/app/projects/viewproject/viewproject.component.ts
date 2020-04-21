import { Component, OnInit } from '@angular/core';
import { Project } from '../projects/models/project';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ProjectserviceService } from '../projectservice.service';

@Component({
  selector: 'app-viewproject',
  templateUrl: './viewproject.component.html',
  styles: [
  ]
})
export class ViewprojectComponent implements OnInit {
  public projectId: number;
  public projectList: Project[];

  constructor(activateRoute: ActivatedRoute, private projectService: ProjectserviceService) {
    this.projectId = activateRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.projectList = this.getProjects();
  }

  public getProjects(){
    return this.projectService.getProjects();
  }
}
