import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjemploReactividadComponent } from './pages/ejemplo-reactividad/ejemplo-reactividad.component';

const routes: Routes = [
  { path: '', component: EjemploReactividadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
