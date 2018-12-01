import { Component, OnInit } from '@angular/core';
import { BancoCinteService } from '../services/banco-cinte.service';

@Component({
  selector: 'app-nuevo-asesor',
  templateUrl: './nuevo-asesor.component.html',
  styleUrls: ['./nuevo-asesor.component.css']
})
export class NuevoAsesorComponent implements OnInit {
  nuevoAsesor: any = {};

  constructor(private servicio: BancoCinteService) { }

  ngOnInit() {
  }

  limpiar() {
    this.nuevoAsesor = {};
  }

  crear(asesor) {
    this.servicio.crear(asesor);
  }
}
