import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public messageService:MessageService) { }

  ngOnInit() {
  }
mail:menssgge=new menssgge;

  contactForm(form) {
    console.log(form);
    this.messageService.sendMessage(form).
    subscribe(()=>{
      alert("Mensaje enviado correctamente");
      this.mail=new menssgge;
    });

  }


  title: string = 'My first AGM project';
  lat: number = -27.4496511;
  lng: number = -58.9915736;



}

export class menssgge{
  constructor(nombre='',asunto='',email='',mensaje=''){
      
    this.nombre=nombre;
    this.asunto=asunto;
    this.email=email;
    this.mensaje=mensaje;
}

  nombre:string;
  asunto:string;
  email:string;
  mensaje:string;

}
