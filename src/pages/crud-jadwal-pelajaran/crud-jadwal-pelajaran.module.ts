import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrudJadwalPelajaranPage } from './crud-jadwal-pelajaran';

@NgModule({
  declarations: [
    CrudJadwalPelajaranPage,
  ],
  imports: [
    IonicPageModule.forChild(CrudJadwalPelajaranPage),
  ],
})
export class CrudJadwalPelajaranPageModule {}
