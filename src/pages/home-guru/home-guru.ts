import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CrudNilaiSiswaPage } from '../crud-nilai-siswa/crud-nilai-siswa';
import { BiodataGuruPage } from '../biodata-guru/biodata-guru';
/**../crud-guru/crud-guru
 * Generated class for the HomeTataUsahaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-guru',
  templateUrl: 'home-guru.html',
})
export class HomeGuruPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeTataUsahaPage');
  }

  crudNilaiSiswa(){
    this.navCtrl.push(CrudNilaiSiswaPage, {
      val: 'crudNilaiSiswa'
    })
  }

  biodataGuru(){
    this.navCtrl.push(BiodataGuruPage, {
      val: 'biodataGuru'
    })
  }

}
