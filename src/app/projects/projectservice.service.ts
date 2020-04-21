import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Project } from './projects/models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectserviceService {
  project: Project;
  projects: Project[];

  constructor() { }

  public countProjects = (numprojects: number) => numprojects + 1;
  public createProject = (newproject: Project, projects: Project[]) => projects.push({...newproject});
  public increaseId = (projectid: any) => projectid.id + 1;
  public numProjects = () => environment.projects.length;
  public saveProject(project: Project, projects: Project[]){
    return this.createProject(project, projects);
  }

  getProjects() {
    return environment.projects;
  }

}
