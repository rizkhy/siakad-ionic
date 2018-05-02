import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the CrudMataPelajaranPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-add-nilai-siswa',
  templateUrl: 'add-nilai-siswa.html',
})
export class AddNilaiSiswaPage {

  public items : any = [];
  public form                   : FormGroup;          
   public listMataPelajaran            : any;
   public kode_mp           : any;
   public nama_mp           : any;
   public KKM           : any;
   public nip           : any;
   // Flag to be used for checking whether we are adding/editing an entry
   public isEdited               : boolean = false;
   // Flag to hide the form upon successful completion of remote operation
   public hideForm               : boolean = false;
   // Property to help ste the page title
   public pageTitle              : string;
   // Property to store the recordID for when an existing entry is being edited
   public recordID               : any      = null;
   private baseURI               : string  = "http://localhost/";

  constructor(public navCtrl    : NavController,
               public http       : Http,
               public NP         : NavParams,
               public fb         : FormBuilder,
               public toastCtrl  : ToastController) 
   {
   	      this.form = fb.group({
         "nama_mp"                  : ["", Validators.required],
         "kode_mp"           : ["", Validators.required],
         "KKM"           : ["", Validators.required],
         "nip"           : ["", Validators.required]
      });
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
      });
   }

   
    
   // Initialise module classes
   

      // Create form builder validation rules


   
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
      this.kode_mp      = item.kode_mp;
      this.nama_mp      = item.nama_mp;
      this.KKM      = item.KKM;
      this.nip      = item.nip;
   
   // Allow navigation to the AddTechnology page for creating a new entry
 addEntry(nama_mp)
   {
      let body     : string   = "key=create&nama_mp=" + nama_mp + "&kode_mp=" +this.kode_mp +"&KKM="+ this.KKM + "&nip=" + this.nip,
          type     : string   = "application/x-www-form-urlencoded; charset=UTF-8",
          headers  : any      = new Headers({ 'Content-Type': type}),
          options  : any      = new RequestOptions({ headers: headers }),
          url      : any      = this.baseURI + "mata_pelajaran/manage-data.php";

 this.http.post(url, body, options)
      .subscribe((data) =>
      {
         // If the request was successful notify the user
         if(data.status === 200)
         {
            this.hideForm   = true;
            this.sendNotification(`Congratulations the mata-pelajaran: ${nama_mp} was successfully added`);
         }
         // Otherwise let 'em know anyway
         else
         {
            this.sendNotification('Something went wrong!');
         }
      });
   }


   // Allow navigation to the AddTechnology page for amending an existing entry
   // (We supply the actual record to be amended, as this method's parameter, 
   // to the AddTechnology page
   viewEntry(param)
   {
      this.navCtrl.push('AddMataPelajaranPage', param);
   }
   
}
