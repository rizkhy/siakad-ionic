import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
// import { CrudKelasPage } from '../crud-kelas/crud-kelas';
import { HomeSiswaPage } from '../home-siswa/home-siswa';
/**
 * Generated class for the Addmata-pelajaranPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ganti-password-siswa',
  templateUrl: 'ganti-password-siswa.html',
})
export class GantiPasswordSiswaPage {

// Define FormBuilder /model properties
   public form                   : FormGroup;          
   public listKelas            : any;
   public p_lama           : any;
   public p_baru           : any;
   public username           : any;
   public ulang_password           : any;
   // Flag to be used for checking whether we are adding/editing an entry
   public isEdited               : boolean = false;
   // Flag to hide the form upon successful completion of remote operation
   public hideForm               : boolean = false;
   // Property to help ste the page title
   public pageTitle              : string;
   // Property to store the recordID for when an existing entry is being edited
   public recordID               : any      = null;
   private baseURI               : string  = "http://localhost/";
    
   // Initialise module classes
   constructor(public navCtrl    : NavController,
               public http       : Http,
               public NP         : NavParams,
               public fb         : FormBuilder,
               public toastCtrl  : ToastController,
               public viewCtrl   : ViewController) 
   {

      // Create form builder validation rules
      this.form = fb.group({
         "p_lama"           : ["", Validators.required],
         "p_baru"           : ["", Validators.required],
         "ulang_password"   : ["", Validators.required]
      });
   }

   
   // Determine whether we adding or editing a record
   // based on any supplied navigation parameters
   ionViewWillEnter()
   {
      this.resetFields();

      if(this.NP.get("record"))
      {
         this.isEdited      = true;
         this.selectEntry(this.NP.get("record"));
         this.pageTitle     = 'Ubah Data';
      }
      else
      {
         this.isEdited      = false;
         this.pageTitle     = 'Tambah Data';
      }
   }



   // Assign the navigation retrieved data to properties
   // used as models on the page's HTML form
   selectEntry(item)
   {
   	// var username = localStorage.getItem('userData');
      this.p_lama      		= item.p_lama;
      this.p_baru      		= item.p_baru;
      this.ulang_password   = item.ulangi_password;
      
   }


   // for the record data
   saveEntry()
   {
      let body       : string = "key=update&username=" + localStorage.getItem('userData') + "&password=" +this.p_baru,
          type       : string = "application/x-www-form-urlencoded; charset=UTF-8",
          headers    : any     = new Headers({ 'Content-Type': type}),
          options    : any     = new RequestOptions({ headers: headers }),
          url        : any     = this.baseURI + "siswa/ganti_password.php";

      this.http.post(url, body, options)
      .subscribe(data =>
      {
         // If the request was successful notify the user
         if(data.status === 200)
         {
            this.hideForm  =  true;
            this.sendNotification(`Selamat, ganti password telah berhasil`);
            this.navCtrl.push(HomeSiswaPage);
         }
         // Otherwise let 'em know anyway
         else
         {
            this.sendNotification('Something went wrong!');
         }
      });
   }


// Remove an existing record that has been selected in the page's HTML form
   // Use angular's http post method to submit the record data 
   // to our remote PHP script (note the body variable we have created which 
   // supplies a variable of key with a value of delete followed by the key/value pairs
   // for the record ID we want to remove from the remote database

   // Handle data submitted from the page's HTML form
   // Determine whether we are adding a new record or amending an
   // existing record
   // saveEntry()
   // {
   //    let  nama_kelas          : string = this.form.controls["nama_kelas"].value

   //    if(this.isEdited)
   //    {
   //       this.updateEntry(nama_kelas);
   //    }
   // }



   // Clear values in the page's HTML form fields
   resetFields() : void
   {
      this.listKelas           = "";
   }



   // Manage notifying the user of the outcome
   // of remote operations
   sendNotification(message)  : void
   {
      let notification = this.toastCtrl.create({
          message       : message,
          duration      : 3000
      });
      notification.present();
   }

}
