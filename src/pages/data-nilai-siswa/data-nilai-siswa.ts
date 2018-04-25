import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; 
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-data-nilai-siswa',
  templateUrl: 'data-nilai-siswa.html',
})
export class DataNilaiSiswaPage {

  public items : any = [];
  constructor(public navCtrl: NavController, public http   : Http) {
  }

  ionViewWillEnter()
   {
      this.load();
   }

  load()
   {
      this.http.get('http://localhost/~light/SiakadAPI/siswa/nilai-siswa.php')
      .map(res => res.json())
      .subscribe(data => 
      {
         this.items = data;         
      });
   }

   getItems(ev: any) { // digunakan untuk memanggil event pada home.html

    let val = ev.target.value;   

    if (val && val.trim() != '') {

      this.items = this.items.filter((item) => {

        return (item.nama_mp.toString().toLowerCase().indexOf(val.toLowerCase()) > - 1);

      })

    }

    if(val == ''){

      return this.load();

    }

  }
}
