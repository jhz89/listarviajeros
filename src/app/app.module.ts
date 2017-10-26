import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ViajeroServiceProvider } from '../providers/viajero-service/viajero-service';
import { HttpClientModule } from '@angular/common/http';
import { AgregarPage } from '../pages/agregar/agregar';
import { ModalController } from 'ionic-angular';

import { FormsModule }   from '@angular/forms';
import { Viajero } from '../app/interfaces/viajero.interface';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AgregarPage
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,        
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AgregarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ViajeroServiceProvider,    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule {}
