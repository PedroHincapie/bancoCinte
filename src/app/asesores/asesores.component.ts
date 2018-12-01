import { Component, OnInit } from '@angular/core';
import { BancoCinteService } from '../services/banco-cinte.service';

@Component({
  selector: 'app-asesores',
  templateUrl: './asesores.component.html',
  styleUrls: ['./asesores.component.css']
})
export class AsesoresComponent implements OnInit {
  asesores: any;

  constructor(private servicio: BancoCinteService) {}

  ngOnInit() {
    this.asesores = this.servicio.getAsesores();
  }
}
