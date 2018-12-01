import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AsesoresComponent } from './asesores/asesores.component';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';

// Rutas del proyecto
const appRoutes: Routes = [
  { path: 'asesores', component: AsesoresComponent},
  {path: 'clientes', component: ClientesComponent }
];

@NgModule({
  declarations: [AppComponent, AsesoresComponent, ClientesComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
