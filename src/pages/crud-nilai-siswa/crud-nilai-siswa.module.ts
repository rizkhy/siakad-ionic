import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrudNilaiSiswaPage } from './crud-nilai-siswa';

@NgModule({
  declarations: [
    CrudNilaiSiswaPage,
  ],
  imports: [
    IonicPageModule.forChild(CrudNilaiSiswaPage),
  ],
})
export class CrudNilaiSiswaPageModule {}
