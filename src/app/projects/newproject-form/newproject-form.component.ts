import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-newproject-form',
  templateUrl: './newproject-form.component.html',
  styles: [
  ]
})
export class NewprojectFormComponent implements OnInit {
  @Input () public titulo: string;
  @Input () public legend: string;
  @Output () public createProject = new EventEmitter<string>();
  public formGroup: FormGroup;

  projectName: string;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  public saveProject(){
    const projectName = this.formGroup.value.projectName;
    this.createProject.emit(projectName);
  }

  private buildForm(){
    this.formGroup = this.formBuilder.group({
      projectName: ['', [Validators.required]]
    });
  }

  public getError(controlName: string): string {
    let error = '';
    const control = this.formGroup.get(controlName);
    if (control.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return error;
  }

}
