import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DireccionService {

  constructor(private http: HttpClient) { }

  metodoUsuario(id_usuario:any){
    return this.http.post(`${environment.API_URI}/metodo_pago/pagoUsuario/`,{"id_usuario":id_usuario});
  }
  eliminarMetodo(id : any){ 
    return this.http.delete(`${environment.API_URI}/metodo_pago/eliminarMetodoPago/${id}`);
  }
  listOne(id:any) {
    return this.http.get(`${environment.API_URI}/metodo_pago/obtenerMetodoPago/${id}`);
  }
  actualizar(juego:any){
    return this.http.put(`${environment.API_URI}/metodo_pago/actualizarMetodoPago/${juego.id}`,juego);
  }
  crearMetodo(id_usuario:any,num_tarjeta:any,direccion:any) {
    return this.http.post(`${environment.API_URI}/metodo_pago/crearMetodoPago`,{"id_usuario":id_usuario,"num_tarjeta":num_tarjeta,"direccion":direccion});
  }
}
