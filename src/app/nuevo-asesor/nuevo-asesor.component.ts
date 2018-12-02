import { Component, OnInit } from '@angular/core';
import { BancoCinteService } from '../services/banco-cinte.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nuevo-asesor',
  templateUrl: './nuevo-asesor.component.html',
  styleUrls: ['./nuevo-asesor.component.css']
})
export class NuevoAsesorComponent implements OnInit {
  nuevoAsesor: any = {};

  constructor(private servicio: BancoCinteService, private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    const  id = this.route.snapshot.params.id ? this.route.snapshot.params.id : null ;
    if (id) {
      this.actualizar(id);
    }
  }

  limpiar() {
    this.nuevoAsesor = {};
  }

  crear(asesor) {
    asesor.id = Math.round( Math.random() * 100);
    this.servicio.crear(asesor);
  }

  actualizar(id) {
    this.nuevoAsesor = this.servicio.getAsesorByid(id)[0];
  }
}
