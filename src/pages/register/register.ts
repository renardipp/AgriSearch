import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild ('nama') name;
  @ViewChild ('hp') nohp;
  @ViewChild ('alamat') alamat;
  @ViewChild ('sandi') katasandi;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

SignUp(){

  let alert = this.alertCtrl.create({
      title: 'Register Sukses Cuy',
      buttons: ['OK']
    });
    alert.present();

    console.log(this.name.value, this.nohp.value, this.alamat.value, this.katasandi.value);

    this.navCtrl.push(TabsPage);
}




}
