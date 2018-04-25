import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrudMataPelajaranPage } from './crud-mata-pelajaran';

@NgModule({
  declarations: [
    CrudMataPelajaranPage,
  ],
  imports: [
    IonicPageModule.forChild(CrudMataPelajaranPage),
  ],
})
export class CrudMataPelajaranPageModule {}
