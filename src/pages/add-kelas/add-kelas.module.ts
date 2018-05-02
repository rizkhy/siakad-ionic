import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddKelasPage } from './add-kelas';

@NgModule({
  declarations: [
    AddKelasPage,
  ],
  imports: [
    IonicPageModule.forChild(AddKelasPage),
  ],
})
export class AddKelasPageModule {}
