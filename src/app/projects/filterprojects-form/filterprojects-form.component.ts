import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filterprojects-form',
  templateUrl: './filterprojects-form.component.html',
  styles: [
  ]
})
export class FilterprojectsFormComponent implements OnInit {
  @Output()
  filtrarProyectos = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  filtraProyectos(event: string){
    this.filtrarProyectos.emit(event);
  }
}
