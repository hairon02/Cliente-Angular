import { Component, OnInit } from '@angular/core';
import { DireccionService } from 'src/app/services/direccion.service';
import { Pago } from 'src/app/models/Pago';
import { Route,Router } from '@angular/router';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css']
})
export class DireccionComponent implements OnInit {
  pagos : Pago [] = [];
  pago = new Pago();

  constructor(private direccionService : DireccionService, private router:Router){
    this.direccionService.metodoUsuario(localStorage.getItem('id')).subscribe((respago: any) =>
    {
      this.pagos = respago;  
      console.log(this.pagos)
    },
    err => console.error(err)
    );
  }

  ngOnInit(): void {
  }

  actualizarMetodo(id:any)
  {
    this.direccionService.listOne(id).subscribe((resjuego: any) =>
    {
      this.pago = resjuego;  
      console.log(this.pago)
      $('#modalModificarMetodo').modal();
      $("#modalModificarMetodo").modal("open");
      
    },
    err => console.error(err)
    );
  }
  guardarActualizarMetodo(){
    this.direccionService.actualizar(this.pago).subscribe((respago:any) =>{
      this.router.navigateByUrl('home/direccion')
      this.direccionService.metodoUsuario(localStorage.getItem('id')).subscribe((respago: any) =>
      {
        this.pagos = respago;  
        console.log(this.pagos)
      },
      err => console.error(err)
      );
      console.log("Cerrando");
      $("#modalModificarMetodo").modal("close");
      console.log(this.pago)
    }
    ); 
  }

  eliminarMetodo(id : any){
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
        this.direccionService.eliminarMetodo(id).subscribe((respago: any) =>
        {
         console.log("resusuario: ", respago);
         this.direccionService.metodoUsuario(localStorage.getItem('id')).subscribe((respago: any) =>
         {
           this.pagos = respago;  
           console.log(this.pagos)
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

  nuevoMetodo()//para un post
  { 
    $('#modalCrearMetodo').modal();
      this.pago = new Pago();
      $("#modalCrearMetodo").modal("open");
    
  }
  guardarCrearMetodo()
  {
    this.pago.id_usuario=Number(localStorage.getItem('id'));
    this.direccionService.crearMetodo(this.pago.id_usuario,this.pago.num_tarjeta,this.pago.direccion).subscribe((respago:any) =>{
      if(respago.insertId>0){
        this.router.navigateByUrl('home/direccion')
        console.log("resusuario: ", respago);
         this.direccionService.metodoUsuario(localStorage.getItem('id')).subscribe((respago: any) =>
         {
           this.pagos = respago;  
           console.log(this.pagos)
         },
         err => console.error(err)
         );
      }  
      console.log("Cerrando");
      $("#modalCrearMetodo").modal("close");
      console.log(this.pagos)
    } 
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
