import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrudPresensiPage } from './crud-presensi';

@NgModule({
  declarations: [
    CrudPresensiPage,
  ],
  imports: [
    IonicPageModule.forChild(CrudPresensiPage),
  ],
})
export class CrudPresensiPageModule {}
