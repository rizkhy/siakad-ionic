import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrudSiswaPage } from './crud-siswa';

@NgModule({
  declarations: [
    CrudSiswaPage,
  ],
  imports: [
    IonicPageModule.forChild(CrudSiswaPage),
  ],
})
export class CrudSiswaPageModule {}
