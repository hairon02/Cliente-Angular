import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get(`${environment.API_URI}/juegos/mostrarJuegos`);
  }

  crearJuego(titulo:any,descripcion:any,genero:any,fecha_lanzamiento:any,precio: any,estado:any,id_usuario:any) {
    return this.http.post(`${environment.API_URI}/juegos/crearJuego`,{"titulo":titulo,"descripcion":descripcion,"genero":genero,"fecha_lanzamiento":fecha_lanzamiento,"precio":precio,"estado":estado,"id_usuario":id_usuario});
  }

  eliminarJuego(id : any){ 
    return this.http.delete(`${environment.API_URI}/juegos/eliminar/${id}`);
  }
  listOne(id:any) {
    return this.http.get(`${environment.API_URI}/juegos/obtenerJuego/${id}`);
  }
  actualizar(juego:any){
    return this.http.put(`${environment.API_URI}/juegos/actualizar/${juego.id}`,juego);
    
  }
  juegosVendedor(id:any){
    return this.http.get(`${environment.API_URI}/juegos/juegoVendedor/${id})`);
  }

  gananciaTotal(id:any) {
    return this.http.get(`${environment.API_URI}/transacciones/gananciaTotal/${id}`);
  }
  ganancias2(id_usuario:any) {
    return this.http.post(`${environment.API_URI}/transacciones/ganancias2`,{"id_usuario":id_usuario});
  }
  bibliotecaJugador(id:any) {
    return this.http.get(`${environment.API_URI}/juegos/bibliotecaJugador/${id}`);
  }

  buscarJuegoTitulo(titulo:any) {
    return this.http.post(`${environment.API_URI}/juegos/juegoTitulo/`,{"titulo":titulo});
  }

  juegosDisponibles() {
    return this.http.get(`${environment.API_URI}/juegos/mostrarJuegosDisponibles`);
  }
}

