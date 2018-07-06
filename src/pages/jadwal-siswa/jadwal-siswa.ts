import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'; 
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-jadwal-siswa',
  templateUrl: 'jadwal-siswa.html',
})
export class JadwalSiswaPage {

  public items : any = [];
  hari: any;
  constructor(public navCtrl: NavController, public http   : Http) {
  }

  ionViewWillEnter()
   {
      this.getData();
   }

   getData(){
    var username = localStorage.getItem('userData');
    var dataa = localStorage.getItem('userData');


  	return new Promise((resolve, reject)=>{
  	  let headers = new Headers();
      let data = JSON.stringify(dataa);
      
  		this.http.post('http://localhost/siswa/jadwal-siswa.php', data, {headers: headers})
      .map(res => res.json())
      .subscribe(data =>{
        this.items = data;        
      })
  		})
  }
  getHari(){
  	var dataa = localStorage.getItem('userData');
    var harii = this.hari;

  	return new Promise((resolve, reject)=>{
  	  let headers = new Headers();
      let data = JSON.stringify(dataa);
      let hari = JSON.stringify(harii);

      let a = data+hari;

      console.log(a)
  		this.http.post('http://localhost/siswa/jadwal-hari.php', a, {headers: headers})
      .map(res => res.json())
      .subscribe(data =>{
        this.items = data;        
      })
  		})
  }
}
