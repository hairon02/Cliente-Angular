import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import {NuevoproductoComponent} from './components/nuevoproducto/nuevoproducto.component';
import { RegistroComponent } from './components/registro/registro.component';
import { JuegoComponent } from './components/juego/juego.component';
import { HomeComponent } from './components/home/home.component';
import { TransaccionComponent } from './components/transaccion/transaccion.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';
import { MenuComponent } from './components/menu/menu.component';
import { DireccionComponent } from './components/direccion/direccion.component';
import { ReembolsoComponent } from './components/reembolso/reembolso.component';
const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
     { 
      path: "",
      redirectTo: "/home/usuario",
      pathMatch: "full"
     },
     {
      path: "usuario",
      component: UsuarioComponent
     },
     {
      path: "nuevoproducto",
      component: NuevoproductoComponent
     },
     {
      path: "registro",
      component: RegistroComponent
     },
     {
      path: "juego",
      component: JuegoComponent
     },
     {
      path: "transaccion",
      component: TransaccionComponent
     },
     {
      path: "carrito",
      component: CarritoComponent
     },
     {
      path: "biblioteca",
      component: BibliotecaComponent
     },
     {
      path: "menu",
      component: MenuComponent
     },
     {
      path: "direccion",
      component: DireccionComponent
     },
     {
      path:"reembolso",
      component: ReembolsoComponent
     }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
