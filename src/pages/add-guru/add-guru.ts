import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { CrudGuruPage } from '../crud-guru/crud-guru';
import { HomeTataUsahaPage } from '../home-tata-usaha/home-tata-usaha';
/**
 * Generated class for the AddguruPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-guru',
  templateUrl: 'add-guru.html',
})
export class AddGuruPage {
  
  // Define FormBuilder /model properties
   public form                   : FormGroup;          
   public listGuru            : any;
   public nip           : any;
   public nama           : any;
   public alamat           : any;
   public password           : any;
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
               public viewCtrl    : ViewController) 
   {

      // Create form builder validation rules
      this.form = fb.group({
         "nama"                  : ["", Validators.required],
         "nip"           : ["", Validators.required],
         "alamat"           : ["", Validators.required],
         "password"           : ["", Validators.required]
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
      this.nip      = item.nip;
      this.nama      = item.nama;
      this.alamat      = item.alamat;
      this.password      = item.password;
      
   }



   // Save a new record that has been added to the page's HTML form
   // Use angular's http post method to submit the record data 
   // to our remote PHP script (note the body variable we have created which 
   // supplies a variable of key with a value of create followed by the key/value pairs
   // for the record data
   createEntry(nama)
   {
      let body     : string   = "key=create&nama=" + nama + "&nip=" +this.nip +"&alamat="+ this.alamat + "&password=" + this.password,
          type     : string   = "application/x-www-form-urlencoded; charset=UTF-8",
          headers  : any      = new Headers({ 'Content-Type': type}),
          options  : any      = new RequestOptions({ headers: headers }),
          url      : any      = this.baseURI + "guru/manage-data.php";

 this.http.post(url, body, options)
      .subscribe((data) =>
      {
         // If the request was successful notify the user
         if(data.status === 200)
         {
            this.hideForm   = true;
            this.sendNotification(`Congratulations the guru: ${nama} was successfully added`);
            this.navCtrl.push(CrudGuruPage);
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
   updateEntry(nama)
   {
      let body       : string = "key=update&nama=" + nama + "&nip=" +this.nip +"&alamat="+ this.alamat + "&password=" + this.password,
          type       : string = "application/x-www-form-urlencoded; charset=UTF-8",
          headers    : any     = new Headers({ 'Content-Type': type}),
          options    : any     = new RequestOptions({ headers: headers }),
          url        : any     = this.baseURI + "guru/manage-data.php";

      this.http.post(url, body, options)
      .subscribe(data =>
      {
         // If the request was successful notify the user
         if(data.status === 200)
         {
            this.hideForm  =  true;
            this.sendNotification(`Congratulations the guru: ${nama} was successfully updated`);
            this.navCtrl.push(CrudGuruPage);
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
      let nama       : string = this.form.controls["nama"].value,
          body       : string = "key=delete&nip=" + this.nip,
          type       : string = "application/x-www-form-urlencoded; charset=UTF-8",
          headers    : any    = new Headers({ 'Content-Type': type}),
          options    : any    = new RequestOptions({ headers: headers }),
          url        : any    = this.baseURI + "guru/manage-data.php";

      this.http.post(url, body, options)
      .subscribe(data =>
      {
         // If the request was successful notify the user
         if(data.status === 200)
         {
            this.hideForm     = true;
            this.sendNotification(`Congratulations the guru: ${nama} was successfully deleted`);
            this.navCtrl.push(CrudGuruPage);
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
      let  nama          : string = this.form.controls["nama"].value

      if(this.isEdited)
      {
         this.updateEntry(nama);
      }
      else
      {
         this.createEntry(nama);
      }
   }



   // Clear values in the page's HTML form fields
   resetFields() : void
   {
      this.listGuru           = "";
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

   closeModal()
   {
      this.navCtrl.push(HomeTataUsahaPage, {
      val: 'HomeTataUsahaPage'
    })
   }

}
