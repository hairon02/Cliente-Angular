import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  constructor(private http: HttpClient) { }

  historialCompras(id:any) {
    return this.http.get(`${environment.API_URI}/transacciones/historialCompras/${id}`);
  }
  gananciaTotal() {
    return this.http.get(`${environment.API_URI}/transacciones/gananciaTotal`);
  }

  list() {
    return this.http.get(`${environment.API_URI}/transacciones/mostrarTransacciones`);
  }

  actualizar(juego:any){
    return this.http.put(`${environment.API_URI}/transacciones/CalificarJuego/${juego.id}`,juego); 
  }

  listOne(id:any) {
    return this.http.get(`${environment.API_URI}/transacciones/obtenerTransaccion/${id}`);
  }

}
