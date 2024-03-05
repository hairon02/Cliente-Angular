import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';
import Swal from 'sweetalert2';
import { Carrito } from 'src/app/models/Carrito';
declare var $: any;

import { Transaccion } from 'src/app/models/Transaccion';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  carritos : Carrito [] = [];

  carrito = new Carrito();

  transacciones: Transaccion [] = [];
  transaccion = new Transaccion();

  constructor(private carritoService: CarritoService, private router: Router) {
    this.carritoService.mostrarCarrito(localStorage.getItem('id')).subscribe((rescar: any) =>
    {
      this.carritos = rescar;  
      console.log(this.carritos)
      console.log(localStorage.getItem('id'))
    },
    err => console.error(err)
    );
   }

  ngOnInit(): void {
  }

  eliminarCarro(id : any){
    console.log(id);
    Swal.fire({
      title: "¿Estás seguro ?",
      text: "No es posible revertir este proceso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, quiero eliminarlo!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.carritoService.eliminarCarrito(id).subscribe((rescar: any) =>
        {
         console.log("resusuario: ", rescar);
         this.carritoService.mostrarCarrito(localStorage.getItem('id')).subscribe((rescar: any) =>
         {
           this.carritos = rescar;  
           console.log(this.carritos)

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

  comprar(){
    const fechaActual = new Date();
    console.log(fechaActual);
    console.log(this.carritos);
    let i=0;
    Swal.fire({
      title: "¿Quieres realizar la compra?",
      text: "",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, quiero comprarlo!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.carritoService.mostrarCarrito(localStorage.getItem('id')).subscribe((rescar: any) =>
        {
          this.carritos = rescar;  
          console.log(this.carritos)
          console.log(localStorage.getItem('id'))
        },
        err => console.error(err)
        );
        for(i=0;i<this.carritos.length;i++)
        {
          this.carritoService.crearTransaccion(localStorage.getItem('id'), this.carritos[i].id_juegos,this.carritos[i].cantidad,fechaActual.toISOString()).subscribe((rescar: any) =>
          {
           console.log("resusuario: ", rescar);
           this.carritoService.mostrarCarrito(localStorage.getItem('id')).subscribe((rescar: any) =>
           {
             this.carritos = rescar;  
             console.log(this.carritos)

           },
           err => console.error(err)
           );
          },
          err => console.error(err)
          );
        }
        this.carritoService.eliminarporUsuario(localStorage.getItem('id')).subscribe((rescar: any) =>
        {
         console.log("resusuario: ", rescar);
         this.carritoService.mostrarCarrito(localStorage.getItem('id')).subscribe((rescar: any) =>
         {
           this.carritos = rescar;  
           console.log(this.carritos)

         },
         err => console.error(err)
         );
        },
        err => console.error(err)
        );
          Swal.fire({
          title: "Comprado!",
          text: "Tu compra se ha realizado.",
          icon: "success"
        });
      }
    });
  }

  menu(){
    this.router.navigateByUrl('home/menu')
}
transaccion1(){
  this.router.navigateByUrl('home/transaccion')
}
biblioteca(){
  this.router.navigateByUrl('home/biblioteca')
}

direccion(){
  this.router.navigateByUrl('home/direccion')
}
reembolso(){
  this.router.navigateByUrl('home/reembolso')
}
carrito1(){
  this.router.navigateByUrl('home/carrito')
}

}
