import { Component, OnInit } from '@angular/core';
import { Route,Router } from '@angular/router';
import { Transaccion } from '../../models/Transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';
import Swal from 'sweetalert2';
import { ReembolsoService } from 'src/app/services/reembolso.service';
import { Reembolso } from 'src/app/models/Reembolso';
declare var $: any;

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.css']
})
export class TransaccionComponent implements OnInit {
  transacciones : Transaccion [] = [];

  transaccion = new Transaccion();

  reembolsos: Reembolso [] = [];
  reembolso = new Reembolso();

  constructor(private transaccionService:TransaccionService, private router: Router, private reembolsoService:ReembolsoService) { 
    this.transaccionService.historialCompras(localStorage.getItem('id')).subscribe((restransaccion: any) =>
    {
      this.transacciones = restransaccion;  
      console.log(this.transacciones)
      

    },
    err => console.error(err)
    );
  }

  ngOnInit(): void {
  }

  mostrarHistorial()
  {
    let ola =localStorage.getItem('id');
    this.transaccionService.historialCompras(ola).subscribe((restransaccion: any) =>
    {
      this.transacciones = restransaccion;  
      console.log(this.transacciones)

    },
    err => console.error(err)
    );
  }  

  review(id:any)
  {
  this.transaccionService.listOne(id).subscribe((restransaccion: any) =>
  {
    this.transaccion = restransaccion;  
    console.log(this.transaccion)
    $('#modalReview').modal();
    $("#modalReview").modal("open");
    
  },
  err => console.error(err)
  );
  }

  guardarReview()
  {
    this.transaccion.id_usuario=Number(localStorage.getItem('id'));
    this.transaccionService.actualizar(this.transaccion).subscribe((restransaccion:any) =>{
      if(restransaccion.insertId>0){
        this.router.navigateByUrl('home/transaccion')
         this.transaccionService.historialCompras(localStorage.getItem('id')).subscribe((restransaccion: any) =>
         {
           this.transaccion = restransaccion;  
           console.log(this.transaccion)
         },
         err => console.error(err)
         );
      }  
      console.log("Cerrando");
      $("#modalReview").modal("close");
    } 
    );
   
  }

  generarReembolso(id : any){
    const fechaActual = new Date();
    console.log(id);
    Swal.fire({
      title: "¿Quieres un reembolso?",
      text: "No es posible revertir este proceso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, quiero un reembolso!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.transaccionService.listOne(id).subscribe((restransaccion: any) =>
        {
          this.transaccion = restransaccion;  
          console.log(this.transaccion)          
        },
        err => console.error(err)
        );
        this.reembolsoService.crearReembolso(id,fechaActual).subscribe((rescar: any) =>
        {
          console.log("resusuario: ", rescar);
          this.transaccionService.historialCompras(localStorage.getItem('id')).subscribe((restransaccion: any) =>
          {
            this.transacciones = restransaccion;  
            console.log(this.transacciones)
            

          },
          err => console.error(err)
          );
        },
        err => console.error(err)
        );
        Swal.fire({
          title: "Generado!",
          text: "Se generó el reembolso.",
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
reembolso1(){
  this.router.navigateByUrl('home/reembolso')
}
carrito(){
  this.router.navigateByUrl('home/carrito')
}

  }
