import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { LateralComponent } from './lateral/lateral.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BodyComponent,
    HeadComponent,
    FooterComponent,
    ContenidoComponent,
    NavegacionComponent,
    LateralComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BodyComponent,
    HeadComponent,
    FooterComponent,
    ContenidoComponent,
    NavegacionComponent,
    LateralComponent
  ]
})
export class ComponentsModule { }
