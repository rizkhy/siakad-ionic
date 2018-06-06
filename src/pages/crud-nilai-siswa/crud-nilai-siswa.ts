import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; 
import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { HomeGuruPage } from '../home-guru/home-guru';
import { AddNilaiSiswaPage } from '../add-nilai-siswa/add-nilai-siswa';

@Component({
  selector: 'page-crud-nilai-siswa',
  templateUrl: 'crud-nilai-siswa.html',
})
export class CrudNilaiSiswaPage {

  public items : any = [];
  constructor(public navCtrl: NavController, public http   : Http,
              public viewCtrl       : ViewController) {
    

  }

 ionViewWillEnter()
   {
      this.load();
   }

   // Retrieve the JSON encoded data from the remote server
   // Using Angular's Http class and an Observable - then
   // assign this to the items array for rendering to the HTML template
   load()
   {
      this.http.get('http://localhost/mata_pelajaran/view_nilai_siswa.php')
      .map(res => res.json())
      .subscribe(data => 
      {
         this.items = data;         
      });
   }

  addNilai(){
      this.navCtrl.push(AddNilaiSiswaPage);
   }
   closeModal()
   {
      this.navCtrl.push(HomeGuruPage, {
      val: 'HomeGuruPage'
    })
   }


}
