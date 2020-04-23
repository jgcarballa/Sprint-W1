import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Project } from './projects/models/project';
import { HttpClient } from '@angular/common/http';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectserviceService {
  project: Project;
  projects: Project[];
  private projectsApi = 'https://api-base.herokuapp.com/api/pub/projects';

  constructor(private httpClient: HttpClient) {
   }

  getProjects() {
    return this.httpClient.get<any>(this.projectsApi);
  }

  postProjects(project: Project) {
    return this.httpClient.post(this.projectsApi, project).subscribe();
  }
  cargaProyectos() {
    environment.projects.forEach(project => this.postProjects(project));
  }
  borrarProyectos() {
    this.httpClient.delete(this.projectsApi).subscribe();
  }
}
