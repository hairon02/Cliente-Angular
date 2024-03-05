import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Juego } from 'src/app/models/Juego';
import { JuegoService } from 'src/app/services/juego.service';
declare var $: any;

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {
  juegos : Juego [] = [];

  juego = new Juego();
  constructor(private juegoService : JuegoService, private router:Router) {
    this.juegoService.bibliotecaJugador(localStorage.getItem('id')).subscribe((resjuego: any) =>
    {
      this.juegos = resjuego;  
      console.log(this.juegos)
    },
    err => console.error(err)
    );
   }

  ngOnInit(): void {
  }

  mostrarJuego(id:any)
  {
  //console.log(id);
    this.juegoService.listOne(id).subscribe((resjuego: any) =>
    {
      this.juego = resjuego;  
      console.log(this.juego)
      $('#modalMostrarJuego').modal();
      $("#modalMostrarJuego").modal("open");
    },
    err => console.error(err)
    );
  }  

  menu(){
      this.router.navigateByUrl('home/menu')
  }
  transaccion(){
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
  carrito(){
    this.router.navigateByUrl('home/carrito')
  }
}
