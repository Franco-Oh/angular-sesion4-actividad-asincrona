import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {
  
  nombreCont = "LUISILLO";
  apellidoCont = "COMUNICA";
  profesionCont = "PROFESION";
  laboralCont = "Aqui van toda tu experiencia laboral";
  aptitudCont = "Aqui van todas tus aptitudes";
  contactoCont = 999999999;
  correoCont = "contacto@contacto.com";
  direccionCont = "Calle X #999 Lima";

  constructor() { }

  ngOnInit(): void {
  }

}
