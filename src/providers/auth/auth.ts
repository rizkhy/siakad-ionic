import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

let url = 'http://localhost/~light/siakadAPI/';
@Injectable()
export class AuthProvider {

  constructor(public http: Http) {
    console.log('Hello AuthProvider Provider');
  }

  postData(credentials, type){
  	return new Promise((resolve, reject)=>{
  		let headers = new Headers();
  		let data = JSON.stringify(credentials);
  		this.http.post(url+type, data, {headers: headers}).
  		subscribe( res=>{
  			resolve(res.json())
  		}, (err)=>{
  			reject(err);
  		});
  	});
  }
}
