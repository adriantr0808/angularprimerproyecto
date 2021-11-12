import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimerComponent } from 'src/components/primercomponent/primercomponent.component';
import { HooksAngular } from 'src/components/hooksangular/hooksangular.component';
import { Deportes } from 'src/components/deportes/deportes.component';
import { FormulariobindingModel } from 'src/components/formularios/formulariobindingmodel.component';
import { FormulariosReferencia } from 'src/components/formularios/formulariosreferecnia.component';
import { FormsModule } from "@angular/forms";
import { TablaMultiplicar } from 'src/components/tablamultiplicar/tablamultiplicar.component';
import { PruebaComponent } from './components/prueba/prueba.component';
@NgModule({
  declarations: [
    AppComponent,
    PrimerComponent,
    HooksAngular,
    Deportes,
    FormulariobindingModel,
    FormulariosReferencia,
    TablaMultiplicar,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
