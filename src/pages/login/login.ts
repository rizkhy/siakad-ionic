import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthProvider } from '../../providers/auth/auth';
import { NavController, ToastController } from 'ionic-angular';
import { HomeSiswaPage } from '../home-siswa/home-siswa';
import { HomeTataUsahaPage } from '../home-tata-usaha/home-tata-usaha';
import { HomeGuruPage } from '../home-guru/home-guru';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public http:Http, public auth: AuthProvider, 
  	public navCtrl: NavController, public toastCtrl: ToastController) {

}

response : any;
userData = {"username":"", "password":""};

ionViewLoad(){
	console.log('ionViewLoad LoginPage');
}

login(){
	if(this.userData.username && this.userData.password){
		this.auth.postData(this.userData, 'login').then((result)=>{
			this.response = result;
			if(this.response.userData.level == '1'){
				alert('Anda Berhasil Masuk Sebagai Guru');
				localStorage.setItem('userData.', JSON.stringify(this.userData.username));
				this.navCtrl.push(HomeGuruPage);

			}else if(this.response.userData.level == '2'){
				alert('Anda Berhasil Masuk Sebagai Siswa');
				localStorage.setItem('userData', JSON.stringify(this.userData.username));
				this.navCtrl.push(HomeSiswaPage);

			}else if(this.response.userData.level == '3'){
				alert('Anda Berhasil Masuk Sebagai Tata Usaha');
				localStorage.setItem('userData', JSON.stringify(this.userData.username));
				this.navCtrl.push(HomeTataUsahaPage);
	}	
	});
}else {
	this.presentToast("Username atau Password Salah");
}
}

presentToast(msg){
	let toast = this.toastCtrl.create({
		message: msg,
		duration: 2000
	});
	toast.present();
}

}