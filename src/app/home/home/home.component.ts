import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProjectserviceService } from 'src/app/projects/projectservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  numProjects: number;

  constructor(private projectService: ProjectserviceService) { }

  ngOnInit() {
    this.numProjects = this.projectService.numProjects();
  }
}
