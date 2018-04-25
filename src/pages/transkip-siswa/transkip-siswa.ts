import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'; 
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-transkip-siswa',
  templateUrl: 'transkip-siswa.html',
})
export class TranskipSiswaPage {

  public items : any = [];
  constructor(public navCtrl: NavController, public http   : Http) {
  }

  ionViewWillEnter()
   {
      // this.load();
      this.getData();
   }

  
   getData(){
     var dataa = localStorage.getItem('userData');
     
  	return new Promise((resolve, reject)=>{
  		let headers = new Headers();
      let data = JSON.stringify(dataa);
      
  		this.http.post('http://localhost/~light/SiakadAPI/siswa/transkip-siswa.php', data, {headers: headers})
      .map(res => res.json())
      .subscribe(data =>{
        this.items = data;        
      })
  		})
  }

//    getItems(ev: any) { // digunakan untuk memanggil event pada home.html

//     let val = ev.target.value;   

//     if (val && val.trim() != '') {

//       this.items = this.items.filter((item) => {

//         return (item.nama_mp.toString().toLowerCase().indexOf(val.toLowerCase()) > - 1);

//       })

//     }

//     if(val == ''){

//       return this.load();

//     }

//   }
}