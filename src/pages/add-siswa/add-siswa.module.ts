import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSiswaPage } from './add-siswa';

@NgModule({
  declarations: [
    AddSiswaPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSiswaPage),
  ],
})
export class AddSiswaPageModule {}
