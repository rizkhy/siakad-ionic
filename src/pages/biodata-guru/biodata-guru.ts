import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'; 
import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { HomeGuruPage } from '../home-guru/home-guru';


@Component({
  selector: 'page-biodata-guru',
  templateUrl: 'biodata-guru.html',
})
export class BiodataGuruPage {

  public items : any = [];
  constructor(public navCtrl: NavController, public http   : Http,
              public viewCtrl       : ViewController) {
  }

  ionViewWillEnter()
   {
      this.getData();
   }

  
   getData(){
     var dataa = localStorage.getItem('userData.');
   
  	return new Promise((resolve, reject)=>{
  		let headers = new Headers();
      let data = JSON.stringify(dataa);
      
  		this.http.post('http://localhost/guru/biodata-guru.php', data, {headers: headers})
      .map(res => res.json())
      .subscribe(data =>{
        this.items = data;        
      })
  		})
  }
   closeModal()
   {
      this.navCtrl.push(HomeGuruPage, {
      val: 'HomeGuruPage'
    })
   }

}
