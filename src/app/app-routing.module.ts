import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { CatalogoComponent } from './components/pages/Catalogos/catalogo/catalogo.component';
import { BebidasComponent } from './components/pages/Catalogos/bebidas/bebidas.component';
import { AlimentosComponent } from './components/pages/Catalogos/alimentos/alimentos.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';


const routes: Routes = [
  {path:'home',component:InicioComponent},
  {path:'catalogo',component:CatalogoComponent},
  {path:'catalogo/bebidas',component:BebidasComponent},
  {path:'catalogo/alimentos',component:AlimentosComponent},
  {path:'contact',component:ContactComponent},
  {path:'admin',component:LoginComponent},
  {path:'ayuda',component:AyudaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
