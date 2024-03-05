import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private http: HttpClient) { 
  }

  mostrarCarrito(id:any) {
    return this.http.get(`${environment.API_URI}/carritos/mostrarCarroUsuario/${id}`);
  }
  eliminarCarrito(id : any){ 
    return this.http.delete(`${environment.API_URI}/carritos/eliminar/${id}`);
  }
  eliminarporUsuario(id : any){
    return this.http.delete(`${environment.API_URI}/carritos/eliminarporUsuario/${id}`);
  }

  crearCarrito(id_usuarios:any,id_juegos:any,cantidad:any) {
    return this.http.post(`${environment.API_URI}/carritos/crearCarrito`,{"id_usuarios":id_usuarios,"id_juegos":id_juegos,"cantidad":cantidad});
  }

  crearTransaccion(id_usuario:any ,id_juego:any, cantidad:any,fecha_compra:any)
  {
    return this.http.post(`${environment.API_URI}/transacciones/crearTransaccion`,{"id_usuario":id_usuario,"id_juego":id_juego,"cantidad":cantidad,"fecha_compra":fecha_compra});
  }
}
