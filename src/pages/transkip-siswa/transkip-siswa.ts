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
  semester: any;
  constructor(public navCtrl: NavController, public http   : Http) {
  }

  ionViewWillEnter()
   {
      this.getData();
   }

   getData(){
    var dataa = localStorage.getItem('userData');


    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      let data = JSON.stringify(dataa);
      
      this.http.post('http://localhost/siswa/transkip-siswa.php', data, {headers: headers})
      .map(res => res.json())
      .subscribe(data =>{
        this.items = data;        
      })
      })
  }
  getSemester(){
    var dataa = localStorage.getItem('userData');
    var semesterr = this.semester;

    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      let data = JSON.stringify(dataa);
      let semester = JSON.stringify(semesterr);

      let a = data+semester;

      console.log(a)
      this.http.post('http://localhost/siswa/transkip_semester.php', a, {headers: headers})
      .map(res => res.json())
      .subscribe(data =>{
        this.items = data;        
      })
      })
  }
}
