import { Component, OnInit } from '@angular/core';
import { OfertaService } from 'src/app/services/oferta.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Oferta } from 'src/app/models/oferta';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

//aca se guarda la url de la imagen que se guarda en firebase
  urlImagen="";
  //se guarda una copia de la bd
  oferta:Oferta[]=[];
  //se utiliza para guardar los datos de la nueva oferta o la que se esta editando 
  ofe:Oferta=new Oferta;
  //para el icono de cargando
  cargar=false;
  //la imagen por deecto que va a tener el objeto "ofe"
  imgIcono="https://firebasestorage.googleapis.com/v0/b/curso-udemy-e950a.appspot.com/o/BumperOfertas%2Fimagen%20(1).png?alt=media&token=15f64c89-b32a-4aa3-a88e-6bc75f099abf";
  //para el icono de cargando
  imgCambiar=false;
  //oara activar la parte de agregar oferta
  act_agregar=true;
  

  constructor(public ofertaService:OfertaService,private storage:AngularFireStorage, public logService:LoginService) {
  
    //se inicializa los objetos 
   this.ofertaService.cargarOfertas()
    .then(()=>{
      this.oferta=this.ofertaService.ofer;
      this.ofe.imagen=this.imgIcono;
      this.cargando();

    });
 
   }


  ngOnInit() {
  }

  

  cambiar(event) {
    this.imgCambiar=true;
    console.log(event);
 
    const file = event.target.files[0];
    const filePath = 'BumperOfertas/'+file.name;
  
    const task = this.storage.upload(filePath,file)
    .then(()=>{
      const ref = this.storage.ref(filePath);
       const downloaURL = ref.getDownloadURL().subscribe(url => { 
      
       this.urlImagen = url 
       console.log(url);
       
       this.ofe.imagen=this.urlImagen;
       this.imgCambiar=false;
      
       });
    });

 }

   
    
    newOferta(desc:HTMLInputElement,precio:HTMLInputElement){

        this.ofe.descripcion=desc.value;
        this.ofe.precio=precio.value;
        console.log(this.ofe)
      if(this.ofe._id==null){
        console.log("nueva oferta");
          if(this.ofe.imagen==this.imgIcono){
            alert("No selecciono una imagen");
          }else{

              this.ofertaService.agregarOferta(this.ofe)
              .subscribe(res=>{
                console.log(res);
                this.ofertaService.cargarOfertas();

                this.urlImagen="";
                this.ofe.imagen=this.imgIcono;
                this.ofe.descripcion="";
                this.ofe.precio="";
                this.ofe._id="";

                alert("Oferta agregada");
                location.reload();
              });

          }

      }else{
        console.log("edit oferta");
        this.ofertaService.editOferta(this.ofe)
        .subscribe(res=>{
          console.log(res);
          this.urlImagen="";
                location.reload();
                this.ofe.imagen=this.imgIcono;
                this.ofe.descripcion="";
                this.ofe.precio="";
                this.ofe._id="";
                alert("Oferta editada");
        });
      }

    }


    cancelar(){
      location.reload();
      
    }

  
    borrarOferta(ofe:Oferta){
    
 

      if(confirm("Está seguro?")){
        this.ofertaService.deliteOferta(ofe._id)
        .subscribe(res=>{
         console.log(res);
         this.ofertaService.cargarOfertas();
      location.reload();
        
       });
      }
      
          
       
      
    }
 
    editOferta(ofer){
      this.ofe=ofer;
      this.act_agregar=false
    }


//metodo para activar seccion de agregar y editar ofertas
    activarAgregar(){
      this.act_agregar=false;
    }



    
    //metodos para el icono de cargar
    async cargando(){
      await this.delay(1500);
      this.cargar=true;
      
    }
   //metodos para el icono de cargar

    private delay(ms: number){
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
/*
     slideIndex = 0;
showSlides();

 showSlides() {
       var i;
       var slides = document.getElementsByClassName("mySlides");
       for (i = 0; i < slides.length; i++) {
        slides[i].display = "none";
       }
       this.slideIndex++;
       if(slideIndex > slides.length) {slideIndex = 1}
       slides[slideIndex-1].style.display = "block";
       setTimeout(showSlides,2000);
 }*/

}
