import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataMataPelajaranPage } from '../data-mata-pelajaran/data-mata-pelajaran';
import { DataNilaiSiswaPage } from '../data-nilai-siswa/data-nilai-siswa';
import { BiodataSiswaPage } from '../biodata-siswa/biodata-siswa';
import { TranskipSiswaPage } from '../transkip-siswa/transkip-siswa';
import { PresensiSiswaPage } from '../presensi-siswa/presensi-siswa';
import { JadwalSiswaPage } from '../jadwal-siswa/jadwal-siswa';
import { GantiPasswordSiswaPage } from '../ganti-password-siswa/ganti-password-siswa';
import { LoginPage } from '../login/login';
/**
 * Generated class for the HomeSiswaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-siswa',
  templateUrl: 'home-siswa.html',
})
export class HomeSiswaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeSiswaPage');
  }

  logout(){
    this.navCtrl.push(LoginPage, {
      val: 'Login'
    })
  }

  dataMataPelajaran(){
  	this.navCtrl.push(DataMataPelajaranPage, {
  		val: 'dataMataPelajaran'
  	})
  }

  dataNilaiSiswa(){
  	this.navCtrl.push(DataNilaiSiswaPage, {
  		val: 'dataNilaiSiswa'
  	})
  }

  biodataSiswa(){
  	this.navCtrl.push(BiodataSiswaPage, {
  		val: 'biodataSiswa'
  	})
  }

  jadwalSiswa(){
    this.navCtrl.push(JadwalSiswaPage, {
      val: 'jadwalSiswa'
    })
  }

  presensiSiswa(){
    this.navCtrl.push(PresensiSiswaPage, {
      val: 'presensiSiswa'
    })
  }

  transkipSiswa(){
    this.navCtrl.push(TranskipSiswaPage, {
      val: 'transkipSiswa'
    })
  }

  gantiPassword(){
    this.navCtrl.push(GantiPasswordSiswaPage, {
      val: 'gantiPassword'
    })
  }

}
