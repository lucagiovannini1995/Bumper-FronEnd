import { Component } from '@angular/core';
import { ProductoService } from './services/producto.service';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public serv:LoginService){

  }

  title = 'Bumper Black';


  

}
