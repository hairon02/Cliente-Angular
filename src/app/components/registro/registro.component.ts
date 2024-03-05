import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/Usuario';
declare var $: any;

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuarios : Usuario [] = [];

  usuario = new Usuario();
  constructor(private usuarioService : UsuarioService,private router:Router) { }

  ngOnInit(): void {
  }
  
  crearUsuario()
  {

    this.usuarioService.registrarUsuario(this.usuario.nombre,this.usuario.nickname,this.usuario.correo,this.usuario.password,this.usuario.id_rol).subscribe((resusuario:any) =>{
      localStorage.setItem('correo', resusuario.correo);
      localStorage.setItem('id_Rol', resusuario.id_rol);
      localStorage.setItem('id', resusuario.id);
      if(resusuario.id_rol == 1)
        this.router.navigateByUrl('home/juego');
      else
        this.router.navigateByUrl('home/menu');
    }
    );
    
  }
}
