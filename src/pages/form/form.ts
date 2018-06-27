import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DaftarPetaniPage } from '../daftar-petani/daftar-petani';

/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }
   public event = {
    month: '2018-01-01',
    timeEnds: '2018-02-01'
  }
  opendaftarpetani(){
    this.navCtrl.push(DaftarPetaniPage);
  }

}
