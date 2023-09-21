import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjemploReactividadComponent } from './pages/ejemplo-reactividad/ejemplo-reactividad.component';
import { ConsumiendoServicioService } from './services/consumiendo-servicio.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EjemploReactividadComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ConsumiendoServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
