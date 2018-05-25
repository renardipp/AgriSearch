import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { FirstPage } from '../pages/first/first';
import { HomePage } from '../pages/home/home';
import { LaporanPage } from '../pages/laporan/laporan';
import { LoginPage } from '../pages/login/login';
import { PesananPage } from '../pages/pesanan/pesanan';
import { ProfilePage } from '../pages/profile/profile';
import { RegisterPage } from '../pages/register/register';
import { SlidesPage } from '../pages/slides/slides';
import { TabsPage } from '../pages/tabs/tabs';
import { FormPage } from '../pages/form/form';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    FirstPage,
    HomePage,
    LaporanPage,
    LoginPage,
    PesananPage,
    ProfilePage,
    RegisterPage,
    SlidesPage,
    TabsPage,
    FormPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FirstPage,
    HomePage,
    LaporanPage,
    LoginPage,
    PesananPage,
    ProfilePage,
    RegisterPage,
    SlidesPage,
    TabsPage,
    FormPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
