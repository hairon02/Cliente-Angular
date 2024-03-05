import { Component, OnInit } from '@angular/core';
import { UsuarioService} from './../../services/usuario.service';
import { Usuario } from 'src/app/models/Usuario';
import { Route, Router } from '@angular/router';
import { Rol } from 'src/app/models/Rol';
import { RolesService } from 'src/app/services/roles.service';
import Swal from 'sweetalert2';
declare var $: any;


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios : Usuario [] = [];
  usuario=new Usuario();

  usuarioNuevo: Usuario = new Usuario();
  roles : Rol [] = []

  constructor(private usuarioService : UsuarioService,private router:Router, private rolesService : RolesService){
    this.usuarioService.list().subscribe((resusuario: any) =>
    {
      this.usuarios = resusuario;  
      //console.log(resusuario);
      console.log(this.usuarios)
    },
    err => console.error(err)
    );
  }

  eliminarUsuario(id : any){
    console.log("Click en eliminar usuario");
    console.log("Identificador del usuario: ",id);
    Swal.fire({
      title: "¿Estás seguro bro?",
      text: "No es posible revertir este!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, quiero eliminarlo!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuarioService.eliminarUsuario(id).subscribe((resusuario: any) =>
        {
         console.log("resusuario: ", resusuario);
         this.usuarioService.list().subscribe((resusuario: any) =>
         {
           this.usuarios = resusuario;  
           //console.log(resusuario);
           console.log(this.usuarios)
         },
         err => console.error(err)
         );
        },
        err => console.error(err)
        );


        Swal.fire({
          title: "Eliminado!",
          text: "Tu archivo ha sido eliminado.",
          icon: "success"
        });
      }
    });
  }

  metodoPrueba(){
    console.log(this.usuarios);
  }
  
  ngOnInit(): void {
  }

  actualizarUsuario(id:any)
  {
  console.log(id);
    this.usuarioService.listOne(id).subscribe((resusuario: any) =>
    {
      this.usuario = resusuario;  
      console.log(this.usuario)
      $('#modalModificarUsuario').modal();
      $("#modalModificarUsuario").modal("open");
    },
    err => console.error(err)
    );
  }
  guardarActualizarUsuario()
  {
    this.usuarioService.actualizar(this.usuario).subscribe((resusuario:any) =>{
      this.router.navigateByUrl('home/usuario')
      this.usuarioService.list().subscribe((resusuario: any) =>
      {
        this.usuarios = resusuario;  
        console.log(this.usuarios)
      },
      err => console.error(err)
      );
      console.log("Cerrando");
      $("#modalModificarUsuario").modal("close");
      console.log(this.usuario)
    }
    );
    
  }

  mostrarUsuario(id:any)
  {
  console.log(id);
    this.usuarioService.listOne(id).subscribe((resusuario: any) =>
    {
      this.usuario = resusuario;  
      console.log(this.usuario)
      $('#modalMostrarUsuario').modal();
      $("#modalMostrarUsuario").modal("open");
    },
    err => console.error(err)
    );
  }  
  
}
