import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { LoginService } from 'src/app/services/login.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import {Router} from '@angular/router'
  import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor(public logService:LoginService,private route:Router) {
 this.logService.actLogin=false;
 this.logService.getUsuarios();

   }

  ngOnInit() {
  }

  ingresar(usu:HTMLInputElement,pass:HTMLInputElement){

    console.log(usu.value,pass.value);

    if(usu.value=="" && pass.value ==""){
      alert("No ingreso su usario y contraseña")
    }else   if (usu.value==""){
      alert("No ingreso el usuario")
    }else if(pass.value==""){
      alert("No ingreso la contraseña")
    }else{
      this.logService.usu.forEach(element => {
        if(element.nombre==usu.value && element.contraseña==pass.value){
          console.log(element);
         /* element.activo=true;
          this.logService.editUsuario(element);
*/
          //this.logService.actLogin=true
          alert("ingreso");
          location.href="http://localhost:4200/home";
          //this.route.navigate(['/home']);
          this.logService.activar(usu.value);
        
        }else{
          alert("Usuario y/o contraseña incorrectas.")
        }
      });
    }

    
  }
}
