import { Component, OnInit } from '@angular/core';
import { ReembolsoService } from 'src/app/services/reembolso.service';
import { Reembolso } from 'src/app/models/Reembolso';
import { Route,Router } from '@angular/router';

@Component({
  selector: 'app-reembolso',
  templateUrl: './reembolso.component.html',
  styleUrls: ['./reembolso.component.css']
})
export class ReembolsoComponent implements OnInit {
  reembolsos : Reembolso [] = [];
  reembolso = new Reembolso();
  
  constructor(private reembolsoService : ReembolsoService, private router:Router){ {
    this.reembolsoService.reembolsoUsuario(localStorage.getItem('id')).subscribe((resbolso: any) =>
    {
      console.log(localStorage.getItem('id'))
      this.reembolsos = resbolso;  
      console.log(this.reembolsos)

    },
    err => console.error(err)
    );
    }
  }
  ngOnInit(): void {
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
reembolso1(){
  this.router.navigateByUrl('home/reembolso')
}
carrito(){
  this.router.navigateByUrl('home/carrito')
}

}
