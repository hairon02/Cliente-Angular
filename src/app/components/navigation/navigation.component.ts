import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    console.log("Cerrando sesion");
    localStorage.removeItem("id_rol")
    localStorage.removeItem("correo")
    localStorage.removeItem('id');
    this.router.navigateByUrl('');
}

home(){
  this.router.navigateByUrl('home/menu')
}
}
