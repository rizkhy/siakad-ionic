import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PresensiSiswaPage } from './presensi-siswa';

@NgModule({
  declarations: [
    PresensiSiswaPage,
  ],
  imports: [
    IonicPageModule.forChild(PresensiSiswaPage),
  ],
})
export class PresensiSiswaPageModule {}
