import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeSiswaPage } from './home-siswa';

@NgModule({
  declarations: [
    HomeSiswaPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeSiswaPage),
  ],
})
export class HomeSiswaPageModule {}
