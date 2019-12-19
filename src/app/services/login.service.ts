import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

actLogin;
readonly url='http://localhost:3000/api/usuario';
usu:Usuario[]=[];
userLogin;

  constructor(private http:HttpClient) {

   }


  getUsuarios(){
    return this.http.get(this.url)
    .subscribe((res:Usuario[])=>{
      this.usu=res;
    })
    
  }


getUsuario(id){

  return this.http.get(this.url + `/${id}`);
}

agregarUsuario(usuario:Usuario){

  return this.http.post(this.url,usuario,{responseType: 'text'});

}

editUsuario(usuario:Usuario){

   console.log("editando");
    return this.http.put(this.url + `/${usuario._id}`,usuario,{responseType: 'text'});
  
 
  

}

deliteUsuario(id){

  return this.http.delete(this.url+`/${id}`,{responseType: 'text'});

}


activar(user){

   console.log("locals")

  this.userLogin=user;
    if(localStorage.getItem('admin')==null){
    
      localStorage.setItem('admin',JSON.stringify(user));
      this.actLogin=JSON.parse(localStorage.getItem('admin'));
      
    }else{
      localStorage.setItem('admin',JSON.stringify(user));
      this.actLogin=JSON.parse(localStorage.getItem('admin'));
     
    }
 

  
 }

 getActivar(){

  return JSON.parse(localStorage.getItem('admin'));
 }

}
