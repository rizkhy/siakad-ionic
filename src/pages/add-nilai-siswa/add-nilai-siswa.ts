import { Component } from '@angular/core';
import { NavController, NavParams, ToastController} from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HomeGuruPage } from '../home-guru/home-guru';

// , Headers, RequestOptions


@Component({
  selector: 'page-add-nilai-siswa',
  templateUrl: 'add-nilai-siswa.html',
})
export class AddNilaiSiswaPage {

  public items : any = [];
  public form                   : FormGroup;
  public kkm : string;          
   // public listMataPelajaran            : any;
   public nilai_uts           	: any = [];
   public nilai_uas             : any =[];
   // Flag to be used for checking whether we are adding/editing an entry
   public isEdited               : boolean = false;
   // Flag to hide the form upon successful completion of remote operation
   public hideForm               : boolean = false;
   // Property to help ste the page title
   public pageTitle              : string;
   // Property to store the recordID for when an existing entry is being edited
   public recordID               : any      = null;
   // private baseURI               : string  = "http://localhost/";

  constructor(public navCtrl    : NavController,
               public http       : Http,
               public NP         : NavParams,
               public fb         : FormBuilder,
               public toastCtrl  : ToastController,) 
   {
      this.form = fb.group({ });
   }

   // Retrieve the JSON encoded data from the remote server
   // Using Angular's Http class and an Observable - then
   // assign this to the items array for rendering to the HTML template

   load()
   {
      this.http.get('http://localhost/mata_pelajaran/view_input_nilai_siswa.php')
      .map(res => res.json())
      .subscribe(data => 
      {
        this.items = data;
        this.kkm = data[0].kkm;
        for(var i=0;i<this.items.length;i++){
          this.form.addControl(this.items[i].uts,this.fb.control('',Validators.required));
          this.form.addControl(this.items[i].uas,this.fb.control('',Validators.required));
        }
      });

   }

    ionViewDidLoad() {
     this.load();
     
    }
    
   selectEntry(item)
    {
     var a = this.nilai_uts      = item.nilai_uts;
     console.log(a)
      this.nilai_uas      = item.nilai_uas;
    }
   
   // Allow navigation to the AddTechnology page for creating a new entry
 addEntry(value)
   {
     console.log(value);
 //      let body     : string   = "key=create&nilai_uas=" + nilai_uas + "&nilai_uts=" +this.nilai_uts,
 //          type     : string   = "application/x-www-form-urlencoded; charset=UTF-8",
 //          headers  : any      = new Headers({ 'Content-Type': type}),
 //          options  : any      = new RequestOptions({ headers: headers }),
 //          url      : any      = this.baseURI + "mata_pelajaran/crud_input_nilai_siswa.php";

 // this.http.post(url, body, options)
 //      .subscribe((data) =>
 //      {
 //         // If the request was successful notify the user
 //         if(data.status === 200)
 //         {
 //            this.hideForm   = true;
 //            this.sendNotification(`Congratulations the mata-pelajaran: ${nilai_uas} was successfully added`);
 //         }
 //         // Otherwise let 'em know anyway
 //         else
 //         {
 //            this.sendNotification('Something went wrong!');
 //         }
 //      });
   }


   // Allow navigation to the AddTechnology page for amending an existing entry
   // (We supply the actual record to be amended, as this method's parameter, 
   // to the AddTechnology page
   viewEntry(param)
   {
      this.navCtrl.push('AddMataPelajaranPage', param);
   }

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
      this.navCtrl.push(HomeGuruPage, {
      val: 'HomeGuruPage'
    })
   }
}
