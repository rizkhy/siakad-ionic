import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CrudSiswaPage } from '../crud-siswa/crud-siswa';
import { CrudGuruPage } from '../crud-guru/crud-guru';
import { CrudMataPelajaranPage } from '../crud-mata-pelajaran/crud-mata-pelajaran';
import { CrudJadwalPelajaranPage } from '../crud-jadwal-pelajaran/crud-jadwal-pelajaran';
import { CrudPresensiPage } from '../crud-presensi/crud-presensi';
import { CrudKelasPage } from '../crud-kelas/crud-kelas';
/*
 * Generated class for the HomeTataUsahaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-tata-usaha',
  templateUrl: 'home-tata-usaha.html',
})
export class HomeTataUsahaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeTataUsahaPage');
  }

  crudSiswa(){
  	this.navCtrl.push(CrudSiswaPage, {
  		val: 'crudSiswa'
  	})
  }

  crudMataPelajaran(){
  	this.navCtrl.push(CrudMataPelajaranPage, {
  		val: 'crudMataPelajaran'
  	})
  }

  crudGuru(){
  	this.navCtrl.push(CrudGuruPage, {
  		val: 'crudGuru'
  	})
  }

  crudJadwalPelajaran(){
    this.navCtrl.push(CrudJadwalPelajaranPage, {
      val: 'crudJadwalPelajaran'
    })
  }

  crudKelas(){
    this.navCtrl.push(CrudKelasPage, {
      val: 'crudKelas'
    })
  }

  crudPresensi(){
    this.navCtrl.push(CrudPresensiPage, {
      val: 'crudPresensi'
    })
  }
}
