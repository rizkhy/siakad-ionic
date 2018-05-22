import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { CrudJadwalPelajaranPage } from '../crud-jadwal-pelajaran/crud-jadwal-pelajaran';

/**
 * Generated class for the Addjadwal-pelajaranPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-jadwal-pelajaran',
  templateUrl: 'add-jadwal-pelajaran.html',
})
export class AddJadwalPelajaranPage {
  
  // Define FormBuilder /model properties
   public form                   : FormGroup;          
   public listjadwalPelajaran            : any;
   public kode_mp           : any;
   public jam           : any;
   public kelas           : any;
   public hari           : any;
   // Flag to be used for checking whether we are adding/editing an entry
   public isEdited               : boolean = false;
   // Flag to hide the form upon successful completion of remote operation
   public hideForm               : boolean = false;
   // Property to help ste the page title
   public pageTitle              : string;
   // Property to store the recordID for when an existing entry is being edited
   public recordID               : any      = null;
   private baseURI               : string  = "http://localhost/";
   public items : any = [];
    
   // Initialise module classes
   constructor(public navCtrl    : NavController,
               public http       : Http,
               public NP         : NavParams,
               public fb         : FormBuilder,
               public toastCtrl  : ToastController) 
   {

      // Create form builder validation rules
      this.form = fb.group({
         "jam"                  : ["", Validators.required],
         "kode_mp"           : ["", Validators.required],
         "kelas"           : ["", Validators.required],
         "hari"           : ["", Validators.required]
      });
   }

   
   // Determine whether we adding or editing a record
   // based on any supplied navigation parameters
   ionViewWillEnter()
   {
      this.resetFields();
      this.load();
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

   load()
   {
      this.http.get('http://localhost/mata_pelajaran/view_jadwal_pelajaran.php')
      .map(res => res.json())
      .subscribe(data => 
      {
         this.items = data;         
      });
   }



   // Assign the navigation retrieved data to properties
   // used as models on the page's HTML form
   selectEntry(item)
   {
      this.kode_mp      = item.kode_mp;
      this.jam      = item.jam;
      this.kelas      = item.kelas;
      this.hari      = item.hari;
      
   }



   // Save a new record that has been added to the page's HTML form
   // Use angular's http post method to submit the record data 
   // to our remote PHP script (note the body variable we have created which 
   // supplies a variable of key with a value of create followed by the key/value pairs
   // for the record data
   createEntry(jam)
   {
      let body     : string   = "key=create&jam=" + jam + "&kode_mp=" +this.kode_mp +"&kelas="+ this.kelas + "&hari=" + this.hari,
          type     : string   = "application/x-www-form-urlencoded; charset=UTF-8",
          headers  : any      = new Headers({ 'Content-Type': type}),
          options  : any      = new RequestOptions({ headers: headers }),
          url      : any      = this.baseURI + "mata_pelajaran/crud_jadwal_pelajaran.php";

 this.http.post(url, body, options)
      .subscribe((data) =>
      {
         // If the request was successful notify the user
         if(data.status === 200)
         {
            this.hideForm   = true;
            this.sendNotification(`Congratulations the jadwal-pelajaran: ${jam} was successfully added`);
            this.navCtrl.push(CrudJadwalPelajaranPage);
         }
         // Otherwise let 'em know anyway
         else
         {
            this.sendNotification('Something went wrong!');
         }
      });
   }



   // Update an existing record that has been edited in the page's HTML form
   // Use angular's http post method to submit the record data 
   // to our remote PHP script (note the body variable we have created which 
   // supplies a variable of key with a value of update followed by the key/value pairs
   // for the record data
   updateEntry(jam)
   {
      let body       : string = "key=update&jam=" + jam + "&kode_mp=" +this.kode_mp +"&kelas="+ this.kelas + "&hari=" + this.hari,
          type       : string = "application/x-www-form-urlencoded; charset=UTF-8",
          headers    : any     = new Headers({ 'Content-Type': type}),
          options    : any     = new RequestOptions({ headers: headers }),
          url        : any     = this.baseURI + "mata_pelajaran/crud_jadwal_pelajaran.php";

      this.http.post(url, body, options)
      .subscribe(data =>
      {
         // If the request was successful notify the user
         if(data.status === 200)
         {
            this.hideForm  =  true;
            this.sendNotification(`Congratulations the jadwal-pelajaran: ${jam} was successfully updated`);
            this.navCtrl.push(CrudJadwalPelajaranPage);
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
   deleteEntry()
   {
      let jam       : string = this.form.controls["jam"].value,
          body       : string = "key=delete&kode_mp=" + this.kode_mp,
          type       : string = "application/x-www-form-urlencoded; charset=UTF-8",
          headers    : any    = new Headers({ 'Content-Type': type}),
          options    : any    = new RequestOptions({ headers: headers }),
          url        : any    = this.baseURI + "mata_pelajaran/crud_jadwal_pelajaran.php";

      this.http.post(url, body, options)
      .subscribe(data =>
      {
         // If the request was successful notify the user
         if(data.status === 200)
         {
            this.hideForm     = true;
            this.sendNotification(`Congratulations the jadwal-pelajaran: ${jam} was successfully deleted`);
            this.navCtrl.push(CrudJadwalPelajaranPage);
         }
         // Otherwise let 'em know anyway
         else
         {
            this.sendNotification('Something went wrong!');
         }
      });
   }



   // Handle data submitted from the page's HTML form
   // Determine whether we are adding a new record or amending an
   // existing record
   saveEntry()
   {
      let  jam          : string = this.form.controls["jam"].value

      if(this.isEdited)
      {
         this.updateEntry(jam);
      }
      else
      {
         this.createEntry(jam);
      }
   }



   // Clear values in the page's HTML form fields
   resetFields() : void
   {
      this.listjadwalPelajaran           = "";
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
