import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = new Usuario() ;
  constructor(private usuarioService : UsuarioService , private router: Router){

  }

  ngOnInit(): void {
  }
  logueo()
  {
    this.usuarioService.existe(this.usuario.correo,this.usuario.password).subscribe((resusuario: any) =>
    {
      if(resusuario.id != -1)
      {
        localStorage.setItem('correo', resusuario.correo);
        localStorage.setItem('id_Rol', resusuario.id_rol);
        localStorage.setItem('id', resusuario.id);
        console.log(localStorage.getItem('id'))
        console.log(localStorage.getItem('correo'))
        console.log(resusuario)

        if(resusuario.id_rol == 1)
          this.router.navigateByUrl('home/juego');
        else
          this.router.navigateByUrl('home/menu');
      }else{
        console.log("Error, usuario o contrasena no valida");
      }
    },
    err => console.error(err)
    );
  }
  registro()
  {
    this.router.navigateByUrl('home/registro');
  }
}
