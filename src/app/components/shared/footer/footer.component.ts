import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public logService:LoginService) { }

  ngOnInit() {
  }

  salir(){
    //this.logService.actLogin=false;

    this.logService.activar("");
    location.href="http://localhost:4200/home";
  }

}
