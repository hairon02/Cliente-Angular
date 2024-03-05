import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { CommonModule } from '@angular/common';
import { NuevoproductoComponent } from './components/nuevoproducto/nuevoproducto.component';
import { RegistroComponent } from './components/registro/registro.component';
import { JuegoComponent } from './components/juego/juego.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { TransaccionComponent } from './components/transaccion/transaccion.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';
import { MenuComponent } from './components/menu/menu.component';
import { DireccionComponent } from './components/direccion/direccion.component';
import { ReembolsoComponent } from './components/reembolso/reembolso.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioComponent,
    NuevoproductoComponent,
    RegistroComponent,
    JuegoComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    TransaccionComponent,
    CarritoComponent,
    BibliotecaComponent,
    MenuComponent,
    DireccionComponent,
    ReembolsoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
