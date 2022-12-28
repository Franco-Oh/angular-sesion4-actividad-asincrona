import { UpperCasePipe } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lateral',
  templateUrl: './lateral.component.html',
  styleUrls: ['./lateral.component.css']
})
export class LateralComponent implements OnInit {

  @Input() nombreLateral!:string;
  @Output() cambioNombre = new EventEmitter<string>();
  
  @Input() apellidoLateral!:string;
  @Output() cambioApellido = new EventEmitter<string>();

  @Input() profesionLateral!:string;
  @Output() cambioProfesion = new EventEmitter<string>();
  
  @Input() laboralLateral!:string;
  @Output() cambioLaboral = new EventEmitter<string>();
  
  @Input() aptitudLateral!:string;
  @Output() cambioAptitud = new EventEmitter<string>();

  @Input() contactoLateral:any;
  @Output() cambioContacto = new EventEmitter<any>();
  
  @Input() correoLateral!:string;
  @Output() cambioCorreo = new EventEmitter<string>();
  
  @Input() direccionLateral!:string;
  @Output() cambioDireccion = new EventEmitter<string>();



  cambiarNombre(){
    this.cambioNombre.emit(this.nombreLateral.toUpperCase());
  }
  cambiarApellido(){
    this.cambioApellido.emit(this.apellidoLateral.toUpperCase());
  }
  cambiarProfesion(){
    this.cambioProfesion.emit(this.profesionLateral.toUpperCase());
  }
  cambiarLaboral(){
    this.cambioLaboral.emit(this.laboralLateral.toUpperCase());
  }
  cambiarAptitud(){
    this.cambioAptitud.emit(this.aptitudLateral.toUpperCase());
  }
  cambiarContacto(){
    this.cambioContacto.emit(this.contactoLateral);
  }
  cambiarCorreo(){
    this.cambioCorreo.emit(this.correoLateral);
  }
  cambiarDireccion(){
    this.cambioDireccion.emit(this.direccionLateral.toUpperCase());
  }



  constructor() { }

  ngOnInit(): void {
  }

}
