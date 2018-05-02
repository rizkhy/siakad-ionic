import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrudKelasPage } from './crud-kelas';

@NgModule({
  declarations: [
    CrudKelasPage,
  ],
  imports: [
    IonicPageModule.forChild(CrudKelasPage),
  ],
})
export class CrudKelasPageModule {}
