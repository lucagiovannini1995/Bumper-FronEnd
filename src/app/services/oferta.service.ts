import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Oferta } from '../models/oferta';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {
  ofer:Oferta[]=[];

  readonly url='http://localhost:3000/api/oferta';





  constructor(private http:HttpClient) {

    this.cargarOfertas();
    
   }


  cargarOfertas(){

   return new Promise( (resolve,reject)=>{
    console.log("entro lrpm")
      this.http.get(this.url)
        .subscribe((resul:Oferta[])=>{
          
          
          this.ofer=resul;
          console.log(this.ofer);
          
          
          resolve();
         
       });

    });
  }

 

  getOferta(id){

    return this.http.get(this.url + `/${id}`);
  }
  
  agregarOferta(oferta:Oferta){

    return this.http.post(this.url,oferta,{responseType: 'text'});

  }

  editOferta(oferta:Oferta){

     console.log("editando");
      return this.http.put(this.url + `/${oferta._id}`,oferta,{responseType: 'text'});
    
   
    

  }

  deliteOferta(id){

    return this.http.delete(this.url+`/${id}`,{responseType: 'text'});

  }
}
