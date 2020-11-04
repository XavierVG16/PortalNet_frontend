import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contrato-lista',
  templateUrl: './contrato-lista.component.html',
  styleUrls: ['./contrato-lista.component.css']
})
export class ContratoListaComponent implements OnInit {
  latitude = -28.68352;
  longitude = -147.20785;
  mapType = 'satellite';
  constructor() { }

  ngOnInit(): void {
  }

}
