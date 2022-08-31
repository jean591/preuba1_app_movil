import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  user={
    usuario:"",
    password1:"",
    password2:""
  }
  constructor(private router: Router) { } // Se debe instanciar

  ngOnInit() {
  }
  guadar(){
    // Se declara e instancia un elemento de tipo NavigationExtras
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user // Al estado se asignamos un objeto con clave y valor
      }
    };
    this.router.navigate(['/login'],navigationExtras); // navegamos hacia el Home y enviamos información adicional
  }

}


