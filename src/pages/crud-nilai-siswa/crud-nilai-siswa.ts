import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddNilaiSiswaPage } from '../add-nilai-siswa/add-nilai-siswa';
/**
 * Generated class for the CrudNilaiSiswaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crud-nilai-siswa',
  templateUrl: 'crud-nilai-siswa.html',
})
export class CrudNilaiSiswaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrudNilaiSiswaPage');
  }

  addNilai(){
  	this.navCtrl.push(AddNilaiSiswaPage, {
  		val: 'addNilai'
  	})
  }

}
