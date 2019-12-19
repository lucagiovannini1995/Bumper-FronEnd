import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Productos } from 'src/app/models/productos';
import { ProductoService } from 'src/app/services/producto.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.component.html',
  styleUrls: ['./alimentos.component.css']
})
export class AlimentosComponent implements OnInit {

  productos:Productos[]=[];
  urlImagen="";
   uploadPercent: Observable<number>;
   downloadURL: Observable<string>;
   cargandoImagen=false;
   act_agregar=true;
   newProd:Productos= new Productos();



  constructor( public prodService:ProductoService,private storage:AngularFireStorage,public logService:LoginService) {
 

    this.prodService.cargarProductos()
           .then(()=>{
              this.productos=this.prodService.getCategoria("Alimentos");
             });    
   }

  ngOnInit() {
  }



  editarProd(prod,nombre:HTMLInputElement,precio:HTMLInputElement){
    // this.prodService.admin=true;
 
 
    if(this.urlImagen!=""){
      prod.imagen=this.urlImagen;
    }
    prod.name=nombre.value;
    prod.precio=precio.value;
  
          console.log(prod);
          
          this.prodService.editProducto(prod)
          .subscribe(res=>{
             console.log(res); 
             this.prodService.cargarProductos(); 
             alert("Producto editado")
           this.urlImagen="";
          });
   }
 
 
 imagenVieja;
     cambiar(event,i) {
  
       console.log(event);

      
       const file = event.target.files[0];
       const filePath = 'BumperImagenes/'+file.name;
     
       const task = this.storage.upload(filePath,file)
       .then(()=>{
         const ref = this.storage.ref(filePath);
          const downloaURL = ref.getDownloadURL().subscribe(url => { 
         
          this.urlImagen = url 
          console.log(url);
          
          this.imagenVieja=this.productos[i].imagen;
          this.productos[i].imagen=this.urlImagen;
    
          
          });
       });

    }

    cargando=false;
    newImage(event) {
  this.cargando=true;
      console.log(event);

     
      const file = event.target.files[0];
      const filePath = 'BumperImagenes/'+file.name;
    
      const task = this.storage.upload(filePath,file)
      .then(()=>{
        const ref = this.storage.ref(filePath);
         const downloaURL = ref.getDownloadURL().subscribe(url => { 
        
         this.urlImagen = url 
         console.log(url);
         this.cargando=false;
         
         });
      });

   }
   activarAgregar(){
    this.act_agregar=false;
  }
 
  agregarProducto(nombre:HTMLInputElement,precio:HTMLInputElement){
    console.log(nombre,precio,this.urlImagen);

    this.newProd.nombre=nombre.value;
    this.newProd.precio=parseInt( precio.value);
    this.newProd.imagen=this.urlImagen;
  
    const p={
      nombre:nombre.value,
      precio:parseInt(precio.value),
      imagen:this.urlImagen
    }

    this.prodService.agregarProducto(this.newProd)
    .subscribe(res=>{
      console.log(res);
      this.prodService.cargarProductos();
      location.reload();
    })

  }






    cancelar(){
      location.reload();
    }

    


    borrarProd(id){
      console.log(id);
      if(confirm("Está seguro?")){
        this.prodService.deliteProducto(id)
        .subscribe((res)=>{
          this.prodService.cargarProductos(); 
          console.log(res)
          
          location.reload();
        });
      }
     
    }







}
