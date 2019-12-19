import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
 
import { FormsModule } from '@angular/forms';
import {environment} from '../environments/environment'
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage'

import { ProgressBarModule  } from "angular-progress-bar";


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { CatalogoComponent } from './components/pages/Catalogos/catalogo/catalogo.component';

import { ContactComponent } from './components/pages/contact/contact.component';
import { BebidasComponent } from './components/pages/Catalogos/bebidas/bebidas.component';
import { AlimentosComponent } from './components/pages/Catalogos/alimentos/alimentos.component';
import { LoginComponent } from './components/login/login.component';
import { AgmCoreModule } from '@agm/core';
import { AyudaComponent } from './components/ayuda/ayuda.component';


@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    CatalogoComponent,
    ContactComponent,
    BebidasComponent,
    AlimentosComponent,
    LoginComponent,
    AyudaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProgressBarModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAVy9kijj1YsZ9fvTIxMXd-4RI2RsWP0aM'
    })
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
