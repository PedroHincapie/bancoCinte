import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BancoCinteService {
  asesores: any = [
    { id: 1, nombre: 'Raul Antonio', especialidad: 'Asesor comercia' },
    { id: 2, nombre: 'Cristina Mira', especialidad: 'Asesor' },
    {
      id: 3,
      nombre: 'Pedro Jesus Hincapie Garcia',
      especialidad: 'Director comercial'
    },
    { id: 4, nombre: 'Sebastina Giraldo', especialidad: 'Cajero' },
    { id: 6, nombre: 'Erika Yepez', especialidad: 'Director Administrtivo' }
  ];

  constructor() {}

  getAsesores() {
    return this.asesores;
  }

  deleteAsesor(asesor, asesores) {
     return asesores.filter(el => el.nombre !== asesor);
  }

  crear(asesor) {
    this.asesores.push(asesor);
  }
}
