import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ViewPetaniPage } from '../view-petani/view-petani';

/**
 * Generated class for the DaftarPetaniPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-daftar-petani',
  templateUrl: 'daftar-petani.html',
})
export class DaftarPetaniPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DaftarPetaniPage');
  }

   openviewpetani(){
    let confirm = this.alerCtrl.create({
      title: 'Bapak A',
      message: 'Bapak A bertani padi sejak 10 tahun...',
      buttons: [
        {
          text: 'Tidak',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Pesan',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present()
  }

}
