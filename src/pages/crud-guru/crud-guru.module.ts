import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrudGuruPage } from './crud-guru';

@NgModule({
  declarations: [
    CrudGuruPage,
  ],
  imports: [
    IonicPageModule.forChild(CrudGuruPage),
  ],
})
export class CrudGuruPageModule {}
