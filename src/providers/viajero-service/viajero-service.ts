import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Viajero } from '../../app/interfaces/viajero.interface';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the ViajeroServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ViajeroServiceProvider {

  
  viajeroListService: Array<Viajero>;

  //viajeroListService : Viajero [] = [];
 

  constructor(private http: HttpClient, public alertCtrl: AlertController) {
    console.log('Hello ViajeroServiceProvider Provider');
  }

 loadViajeros() {  
       
    this.http.get('http://localhost:8080/tiquetesapp/webresources/entidades.viajero').subscribe(data => {
      // Read the result field from the JSON response.
      this.viajeroListService = data as Array<Viajero>;
    });
 }

 saveViajero(viajeros:Viajero){   
  
const body = {
  apellido: viajeros.apellido,
  cedula: viajeros.cedula,
  correo: viajeros.correo,
  nombre: viajeros.nombre,
  telefono: viajeros.telefono
  };

console.log(body)

this.http.post('http://localhost:8080/tiquetesapp/webresources/entidades.viajero',body).subscribe(data => {
    
    let alert = this.alertCtrl.create({
      title: 'Viajero Creado!',
      subTitle: 'Usted ha Creado El Viajero con Exito!',
      buttons: ['Aceptar']
    });
    alert.present();  

this.loadViajeros();

});
}   

 /* loadViajeros() {        
    return this.http.get('http://localhost:8080/tiquetesapp/webresources/entidades.viajero/?results=25');
  }*/
    
    

  }
  
  


