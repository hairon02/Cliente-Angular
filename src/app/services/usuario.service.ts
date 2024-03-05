import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get(`${environment.API_URI}/usuarios/mostrarUsuarios`);
  }

  existe(correo : any, password : any){ 
    return this.http.post(`${environment.API_URI}/usuarios/ValidarUsuario`,{"correo":correo, "password":password});
  }

  eliminarUsuario(id : any){ 
    return this.http.delete(`${environment.API_URI}/usuarios/eliminar/${id}`);
  }

  listOne(id:any) {
    return this.http.get(`${environment.API_URI}/usuarios/obtenerUsuario/${id}`);
  }

  actualizar(usuario:any){
    return this.http.put(`${environment.API_URI}/usuarios/actualizar/${usuario.id}`,usuario);
    
  }
  registrarUsuario(nombre:any,nickname:any,correo:any,password:any,id_rol:any){
    return this.http.post(`${environment.API_URI}/usuarios/crearUsuario`,{"nombre":nombre,"nickname":nickname,"correo":correo,"password":password,"id_rol":id_rol});
  }
 
}
