import { Component, OnInit } from '@angular/core';
import {Juego} from 'src/app/models/Juego';
import { JuegoService } from 'src/app/services/juego.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-nuevoproducto',
  templateUrl: './nuevoproducto.component.html',
  styleUrls: ['./nuevoproducto.component.css']
})
export class NuevoproductoComponent implements OnInit {

  juegos : Juego [] = [];

  juego ! : Juego;

  constructor(private juegoService : JuegoService, private router:Router){
    this.juegoService.list().subscribe((resjuego: any) =>
    {
      this.juego = resjuego;
      console.log(this.juegos)
    },
    err => console.error(err)
    );
  }
//
  nuevoProducto()//para un post
  {
    this.juegoService.crearJuego(this.juego.descripcion,this.juego.titulo,this.juego.estado,this.juego.fecha_lanzamiento,this.juego.genero, this.juego.precio, this.juego.id_usuario).subscribe((resjuego:any) =>{
      if(resjuego.insertId>0){
        this.router.navigateByUrl('/nuevoproducto')

      }

    }
    
    );
  }

  ngOnInit(): void {
  }

}
