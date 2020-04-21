import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../projects/models/project';

@Component({
  selector: 'app-viewerproject-form',
  templateUrl: './viewerproject-form.component.html',
  styles: [
  ]
})
export class ViewerprojectFormComponent implements OnInit {
  @Input () public project: Project;

  constructor() { }

  ngOnInit(): void {
  }

}
