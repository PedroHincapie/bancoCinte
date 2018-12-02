import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AsesoresComponent } from './asesores/asesores.component';
import { RouterModule, Routes} from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { NuevoAsesorComponent } from './nuevo-asesor/nuevo-asesor.component';

// Rutas del proyecto
const appRoutes: Routes = [
  { path: 'asesores', component: AsesoresComponent},
  {path: 'nuevoAsesor', component: NuevoAsesorComponent },
  {path: 'clientes', component: ClientesComponent },
  {path: 'nuevoAsesor/:id', component: NuevoAsesorComponent }
];

@NgModule({
  declarations: [AppComponent, AsesoresComponent, ClientesComponent, NuevoAsesorComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
