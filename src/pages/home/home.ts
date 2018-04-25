import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeTataUsahaPage } from '../home-tata-usaha/home-tata-usaha';
import { HomeGuruPage } from '../home-guru/home-guru';
import { HomeSiswaPage } from '../home-siswa/home-siswa';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  tataUsaha(){
  	this.navCtrl.push(HomeTataUsahaPage, {
  		val: 'tataUsaha'
  	})
  }

  guru(){
  	this.navCtrl.push(HomeGuruPage, {
  		val: 'guru'
  	})
  }

  siswa(){
  	this.navCtrl.push(HomeSiswaPage, {
  		val: 'siswa'
  	})
  }

}
