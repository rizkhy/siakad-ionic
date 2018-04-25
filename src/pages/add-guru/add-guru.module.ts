import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddGuruPage } from './add-guru';

@NgModule({
  declarations: [
    AddGuruPage,
  ],
  imports: [
    IonicPageModule.forChild(AddGuruPage),
  ],
})
export class AddGuruPageModule {}
