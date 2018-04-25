import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HomeTataUsahaPage } from '../pages/home-tata-usaha/home-tata-usaha';
import { HomeGuruPage } from '../pages/home-guru/home-guru';
import { HomeSiswaPage } from '../pages/home-siswa/home-siswa';
import { CrudSiswaPage } from '../pages/crud-siswa/crud-siswa';
import { CrudGuruPage } from '../pages/crud-guru/crud-guru';
import { CrudNilaiSiswaPage } from '../pages/crud-nilai-siswa/crud-nilai-siswa';
import { CrudMataPelajaranPage } from '../pages/crud-mata-pelajaran/crud-mata-pelajaran';
import { DataMataPelajaranPage } from '../pages/data-mata-pelajaran/data-mata-pelajaran';
import { DataNilaiSiswaPage } from '../pages/data-nilai-siswa/data-nilai-siswa';
import { BiodataSiswaPage } from '../pages/biodata-siswa/biodata-siswa';
import { BiodataGuruPage } from '../pages/biodata-guru/biodata-guru';
import { IonicStorageModule } from '@ionic/storage';
import { TranskipSiswaPage } from '../pages/transkip-siswa/transkip-siswa';
import { PresensiSiswaPage } from '../pages/presensi-siswa/presensi-siswa';
import { JadwalSiswaPage } from '../pages/jadwal-siswa/jadwal-siswa';
import { CrudJadwalPelajaranPage } from '../pages/crud-jadwal-pelajaran/crud-jadwal-pelajaran';
import { CrudPresensiPage } from '../pages/crud-presensi/crud-presensi';
import { LoginPage } from '../pages/login/login';

import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HomeGuruPage,
    HomeSiswaPage,
    HomeTataUsahaPage,
    CrudSiswaPage,
    CrudGuruPage,
    CrudNilaiSiswaPage,
    CrudMataPelajaranPage,
    DataMataPelajaranPage,
    DataNilaiSiswaPage,
    BiodataSiswaPage,
    BiodataGuruPage,
    JadwalSiswaPage,
    PresensiSiswaPage,
    TranskipSiswaPage,
    CrudJadwalPelajaranPage,
    CrudPresensiPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HomeTataUsahaPage,
    HomeSiswaPage,
    HomeGuruPage,
    CrudSiswaPage,
    CrudGuruPage,
    CrudNilaiSiswaPage,
    CrudMataPelajaranPage,
    DataMataPelajaranPage,
    DataNilaiSiswaPage,
    BiodataSiswaPage,
    BiodataGuruPage,
    JadwalSiswaPage,
    PresensiSiswaPage,
    TranskipSiswaPage,
    CrudJadwalPelajaranPage,
    CrudPresensiPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
