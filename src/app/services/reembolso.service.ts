import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReembolsoService {

  constructor(private http: HttpClient) { }

  reembolsoUsuario(id_usuario:any) {
    return this.http.post(`${environment.API_URI}/reembolsos/reembolsoUsuario/`,{"id_usuario":id_usuario});
  }
  crearReembolso(id_transacciones:any,fecha_reembolso:any) {
    return this.http.post(`${environment.API_URI}/reembolsos/crearReembolso`,{"id_transacciones":id_transacciones,"fecha_reembolso":fecha_reembolso});
  }

}
