import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  descargar(){
    alert('Realice el pago antes de descargar el CV.');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
