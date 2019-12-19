import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.css']
})
export class AyudaComponent implements OnInit {

  login=false;
  cat=false;
  inicio=false;
  constructor() {}

  ngOnInit() {
  }


  cambioLogin(){
    if(this.login==false){
      this.login=true;
    }else{
      this.login=false;
    }
    
  }
  cambioCat(){
    if(this.cat==false){
      this.cat=true;
    }else{
      this.cat=false;
    }
    
  }

  cambioIni(){
    if(this.inicio==false){
      this.inicio=true;
    }else{
      this.inicio=false;
    }
    
  }
}
