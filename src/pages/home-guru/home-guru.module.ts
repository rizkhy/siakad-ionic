import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeGuruPage } from './home-guru';

@NgModule({
  declarations: [
    HomeGuruPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeGuruPage),
  ],
})
export class HomeGuruPageModule {}
