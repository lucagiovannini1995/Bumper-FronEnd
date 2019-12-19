import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Productos } from '../models/productos';
import { forEach } from '@angular/router/src/utils/collection';
import { promise } from 'protractor';
import { reject } from 'q';





@Injectable({
  providedIn: 'root'
})

export class ProductoService {

  
  prod:Productos[]=[];
  prodcategoria:Productos[]=[];
  readonly url='http://localhost:3000/api/productos';
  admin:boolean=false;



  mostrar:boolean=false;

  constructor(private http:HttpClient) {
    this.mostrar=false;
    this.cargarProductos();
    
   }


  getCategoria(categoria):Productos[]{
    this.prodcategoria=[];
    this.prod.forEach((p)=> {
      if(p.categoria.toLowerCase()==categoria.toLowerCase()){
        this.prodcategoria.push(p);
      }

    });
    return this.prodcategoria;

  }
  cargarProductos(){

   return new Promise( (resolve,reject)=>{
    console.log("entro lrpm")
      this.http.get(this.url)
        .subscribe((resul:Productos[])=>{
          
          
          this.prod=resul;
          console.log(this.prod);
          this.mostrar=true;
          
          resolve();
         
       });

    });
  }

 

  getProducto(id){

    return this.http.get(this.url + `${id}`);
  }
  
  agregarProducto(producto:Productos){

    return this.http.post(this.url,producto,{responseType: 'text'});

  }

  editProducto(producto:Productos){

     console.log("editando");
      return this.http.put(this.url + `/${producto._id}`,producto,{responseType: 'text'});
    
   
    

  }

  deliteProducto(id){

    return this.http.delete(this.url+`/${id}`,{responseType: 'text'});

  }
}
