import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { Juego } from 'src/app/models/Juego';
import { JuegoService } from 'src/app/services/juego.service';
import { CarritoService } from 'src/app/services/carrito.service';
import { Carrito } from 'src/app/models/Carrito';
declare var $: any;
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  juegos: Juego[] = [];
  carritos: Carrito[] = [];

  carrito = new Carrito();
  juego = new Juego();
  constructor(private juegoService: JuegoService, private router: Router, private carritoService: CarritoService) {
    this.juegoService.juegosDisponibles().subscribe((resjuego: any) => {
      this.juegos = resjuego;
      console.log(this.juegos)
    },
      err => console.error(err)
    );
  }

  ngOnInit(): void {
    $('.carousel.carousel-slider').carousel({
      fullWidth: true
    });
  }

  mostrarJuego(id: any) {
    //console.log(id);
    this.juegoService.listOne(id).subscribe((resjuego: any) => {
      this.juego = resjuego;
      console.log(this.juego)
      $('#modalMostrarJuego').modal();
      $("#modalMostrarJuego").modal("open");
    },
      err => console.error(err)
    );
  }

  agregarCantidad(id: any)//abre el modal
  {
    this.juego = new Juego();
    this.carrito = new Carrito();

    this.juegoService.listOne(id).subscribe((resjuego: any) => {
      this.juego = resjuego;
      console.log(this.juego)
      $('#modalAgregar').modal();
      $("#modalAgregar").modal("open");
    },
      err => console.error(err)
    );

  }
  insertarCarrito()//inserta
  {
    this.carritoService.crearCarrito(localStorage.getItem('id'), this.juego.id, this.carrito.cantidad).subscribe((rescar: any) => {
      this.carrito = rescar;
      console.log("Cerrando");
      $("#modalAgregar").modal("close");
      this.router.navigateByUrl('home/carrito')
    }
    );

  }
  menu() {
    this.router.navigateByUrl('home/menu')
  }
  transaccion() {
    this.router.navigateByUrl('home/transaccion')
  }
  biblioteca() {
    this.router.navigateByUrl('home/biblioteca')
  }

  direccion() {
    this.router.navigateByUrl('home/direccion')
  }
  reembolso() {
    this.router.navigateByUrl('home/reembolso')
  }
  carrito1() {
    this.router.navigateByUrl('home/carrito')
  }



}
