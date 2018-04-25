import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; 
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the CrudMataPelajaranPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-crud-mata-pelajaran',
  templateUrl: 'crud-mata-pelajaran.html',
})
export class CrudMataPelajaranPage {

  public items : any = [];
  constructor(public navCtrl: NavController, public http   : Http) {
		

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
      this.http.get('http://localhost/mata_pelajaran/retrieve-data.php')
      .map(res => res.json())
      .subscribe(data => 
      {
         this.items = data;         
      });
   }


   // Allow navigation to the AddTechnology page for creating a new entry
   addEntry()
   {
      this.navCtrl.push('AddMataPelajaranPage');
   }


   // Allow navigation to the AddTechnology page for amending an existing entry
   // (We supply the actual record to be amended, as this method's parameter, 
   // to the AddTechnology page
   viewEntry(param)
   {
      this.navCtrl.push('AddMataPelajaranPage', param);
   }
   
   getItems(ev: any) { // digunakan untuk memanggil event pada home.html

    let val = ev.target.value;   

    if (val && val.trim() != '') {

      this.items = this.items.filter((item) => {

        return (item.nama.toString().toLowerCase().indexOf(val.toLowerCase()) > - 1);

      })

    }

    if(val == ''){

      return this.load();

    }
}
}