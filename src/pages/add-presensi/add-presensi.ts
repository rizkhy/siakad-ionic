import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { HomeTataUsahaPage } from '../home-tata-usaha/home-tata-usaha';
/**
 * Generated class for the AddPresensiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-presensi',
  templateUrl: 'add-presensi.html',
})
export class AddPresensiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
               public viewCtrl       : ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPresensiPage');
  }

closeModal()
   {
      this.navCtrl.push(HomeTataUsahaPage, {
      val: 'HomeTataUsahaPage'
    })
   }

}
