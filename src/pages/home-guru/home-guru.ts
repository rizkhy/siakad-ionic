import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MengajarGuruPage } from '../mengajar-guru/mengajar-guru';
import { BiodataGuruPage } from '../biodata-guru/biodata-guru';
import { LoginPage } from '../login/login';

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

    logout(){
    this.navCtrl.push(LoginPage, {
      val: 'Login'
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeTataUsahaPage');
  }

  mengajarGuru(){
    this.navCtrl.push(MengajarGuruPage, {
      val: 'mengajarGuru'
    })
  }

  biodataGuru(){
    this.navCtrl.push(BiodataGuruPage, {
      val: 'biodataGuru'
    })
  }

}
