import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [HeaderComponent, MainComponent, FooterComponent, LayoutComponent, NotFoundComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [LayoutComponent]
})
export class CoreModule { }
