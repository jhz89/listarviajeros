import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { AgregarPageModule } from './agregar.module';
import { Viajero } from '../../app/interfaces/viajero.interface';
import { ViajeroServiceProvider } from '../../providers/viajero-service/viajero-service'


/**
 * Generated class for the AgregarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {

  viajero:Viajero [] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private viajeroService:ViajeroServiceProvider) {
         
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarPage');    
  } 

  ngOnInit() {
    //this.viajero = new Viajero("","","","","");    
  }
  
  agregarViajero() {
    let modal = this.modalCtrl.create(AgregarPageModule);
    modal.present();
  }

  onSaveViajero(){            
    this.viajeroService.saveViajero(this.viajero);
    
  }

}


