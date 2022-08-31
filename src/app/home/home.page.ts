

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Animation, AnimationController} from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';






@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements AfterViewInit{
   data:any;
  anim:Animation
  @ViewChild('square', {static: false}) square :ElementRef;
  
   
  isPlaying=false
  constructor(private animationCtrl: AnimationController,private activeroute: ActivatedRoute, private router: Router) {  // Se llama a la ruta activa y se obtiene sus parametros mediante una subscripcion
   this.activeroute.queryParams.subscribe(params => { // Utilizamos lambda
     if (this.router.getCurrentNavigation().extras.state) { // Validamos que en la navegacion actual tenga extras
       this.data = this.router.getCurrentNavigation().extras.state.user; // Si tiene extra rescata lo enviado
       console.log(this.data) // Muestra por consola lo traido
     }else{this.router.navigate(["/login"])} // Si no tiene extra la navegacion actual navegar al login
   });
 }


 ngAfterViewInit(){
  this.anim=this.animationCtrl.create('myanimation');
  this.anim.addElement(this.square.nativeElement);
  this.anim.duration(2000);
  this.anim.iterations(Infinity);
  this.anim.easing('ease-out');
  
  this.anim.fromTo('transform', 'translateX(0px)', 'translateX(100px)');
  this.anim.fromTo('opacity', '1', '0.2');
  if (this.isPlaying){
   this.anim.pause();

}
else{
   this.anim.play();
   this.isPlaying=this.isPlaying
  
}
   
  
 }

}












  
 

  
 
  

 
   


 


 

