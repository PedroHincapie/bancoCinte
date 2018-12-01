import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BancoCinteService {
  asesores: any = [
    { id: 1, nombre: 'Florería la Gardenia', especialidad: 'Asesor comercia' },
    { id: 2, nombre: 'Donas la pasadita', especialidad: 'Asesor comercia' },
    {
      id: 3,
      nombre: 'Veterinaria Huellitas Felices',
      especialidad: 'Asesor comercia'
    },
    { id: 4, nombre: 'Sushi Suhiroll', especialidad: 'Asesor comercia' },
    { id: 6, nombre: 'Zapatería el Clavo', especialidad: 'Asesor comercia' }
  ];

  constructor() {}

  getAsesores() {
    return this.asesores;
  }
}
