import { ThrowStmt } from '@angular/compiler';

export class Productos{

    constructor(nombre='',precio=0,categoria='',imagen=''){
      
        this.nombre=nombre;
        this.precio=precio;
        this.categoria=categoria;
        this.imagen=imagen;
    }
    
    _id:string;
    nombre:string;
    precio:Number;
    categoria:string;
    imagen:string;


}