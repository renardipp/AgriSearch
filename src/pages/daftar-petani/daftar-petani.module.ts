import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DaftarPetaniPage } from './daftar-petani';

@NgModule({
  declarations: [
    DaftarPetaniPage,
  ],
  imports: [
    IonicPageModule.forChild(DaftarPetaniPage),
  ],
})
export class DaftarPetaniPageModule {}
