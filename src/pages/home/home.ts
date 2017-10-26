import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Refresher } from "ionic-angular";
import { ViajeroServiceProvider } from '../../providers/viajero-service/viajero-service';
import { Viajero } from '../../app/interfaces/viajero.interface';
import { VIAJEROS } from '../../app/data/data.viajeros';
import { ModalController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {  

  //viajeroList : Viajero [] = [];

  viajeroList: Array<Viajero>;

  constructor(public navCtrl: NavController, public viajeroService:ViajeroServiceProvider, public modalCtrl: ModalController) {
    console.log("hi list");
    this.viajeroService.loadViajeros();    
    this.viajeroList = viajeroService.viajeroListService;
  }

  recargar_viajeros(refresher:Refresher)
  {
    console.log("Inicio del refresh");
    setTimeout(()=>{
      console.log("Terminó el refresh");
      this.viajeroService.loadViajeros(); 
      this.viajeroList = this.viajeroService.viajeroListService;
      refresher.complete();
    }, 1500)
  }

  borrar_viajero(idx:number){
    this.viajeroList.splice(idx, 1);
  }

  agregarViajero() {
    let modal = this.modalCtrl.create(AgregarPage);
    modal.present();
  }

 /*recargar_viajeros(refresher:Refresher){
    this.viajeroService.loadViajeros()
    .subscribe(
      (data) => { // Success
        this.viajeroList = data['results'];
      },
      (error) =>{
        console.error(error);
      }
    )
 } */

}
