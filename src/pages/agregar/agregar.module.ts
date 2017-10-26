import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarPage } from './agregar';
import { ModalController } from 'ionic-angular';

@NgModule({
  declarations: [
    AgregarPage,
    ModalController,
  ],
  imports: [
    IonicPageModule.forChild(AgregarPage),
  ],
})
export class AgregarPageModule {
  
}
