import { Component, OnInit } from '@angular/core';
import { JuegoService } from 'src/app/services/juego.service';
import { Juego } from 'src/app/models/Juego';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {
  juegos : Juego [] = [];

  juego = new Juego();
  constructor(private juegoService : JuegoService, private router:Router){
    this.juegoService.juegosVendedor(localStorage.getItem('id')).subscribe((resjuego: any) =>
    {
      this.juegos = resjuego;  
      console.log(this.juegos)
    },
    err => console.error(err)
    );
  }

  ngOnInit(): void {

    this.initDatepicker();
    this.juegoService.juegosVendedor(localStorage.getItem('id')).subscribe((resjuego: any) => {
        this.juegos = resjuego;
    }, err => console.error(err));
  }

  eliminarJuego(id : any){
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No es posible revertir este proceso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, quiero eliminarlo!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.juegoService.eliminarJuego(id).subscribe((resjuego: any) =>
        {
         console.log("resusuario: ", resjuego);
         this.juegoService.juegosVendedor(localStorage.getItem('id')).subscribe((resjuego: any) =>
         {
           this.juegos = resjuego;  
           console.log(this.juegos)
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

  actualizarJuego(id:any)
  {
    this.juegoService.listOne(id).subscribe((resjuego: any) =>
    {
      this.juego = resjuego;  
      console.log(this.juego)
      $('#modalModificarJuego').modal();
      $("#modalModificarJuego").modal("open");
      
    },
    err => console.error(err)
    );
  }
  guardarActualizarJuego()
  {
    this.juegoService.actualizar(this.juego).subscribe((resjuego:any) =>{
      //this.router.navigateByUrl('home/juego')
      this.juegoService.juegosVendedor(localStorage.getItem('id')).subscribe((resjuego: any) =>
      {
        this.juegos = resjuego;  
        console.log(this.juegos)
      },
      err => console.error(err)
      );
      console.log("Cerrando");
      $("#modalModificarJuego").modal("close");
      console.log(this.juego)
    }
    );
    
  }

  guardarCrearJuego()
  {
    this.juego.id_usuario=Number(localStorage.getItem('id'));
    this.juegoService.crearJuego(this.juego.titulo,this.juego.descripcion,this.juego.genero,this.juego.fecha_lanzamiento,this.juego.precio, this.juego.estado, this.juego.id_usuario).subscribe((resjuego:any) =>{
      if(resjuego.insertId>0){
        //this.router.navigateByUrl('home/juego')
        console.log("resusuario: ", resjuego);
         this.juegoService.juegosVendedor(localStorage.getItem('id')).subscribe((resjuego: any) =>
         {
           this.juegos = resjuego;  
           console.log(this.juegos)
         },
         err => console.error(err)
         );
      }  
      console.log("Cerrando");
      $("#modalcrearJuego").modal("close");
      console.log(this.juego)
    } 
    );
   
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
  nuevoProducto()//para un post
  { 
    $('#modalcrearJuego').modal();
      this.juego = new Juego();
      this.juego.fecha_lanzamiento = '';

      $("#modalcrearJuego").modal("open");
    
  }
  initDatepicker(fecha?: any)
  {
      let date = fecha;
      if(fecha){
          date = new Date(fecha += 'T00:00:00');
          $('#fechaJuego').datepicker({
              format: "yyyy-mm-dd",
              defaultDate: date,
          });
      }
  }

  actualizarFecha(date?: any)
  {
      if(date){
          this.juego.fecha_lanzamiento = date;
      }
  }

  ganancias()
  {
    this.juegoService.ganancias2(localStorage.getItem('id')).subscribe((resjuego:any) =>{
      console.log("resusuario: ", resjuego);
      console.log("resusuario.ganancia: ", resjuego.ganancia_total);

      this.juego = resjuego;
      console.log(this.juego);
      $('#modalMostrarGanancias').modal();
      $("#modalMostrarGanancias").modal("open");
            
    } 
    );
  }
  enviarjuego()
  {
    this.router.navigateByUrl('home/juego')

  }
}
