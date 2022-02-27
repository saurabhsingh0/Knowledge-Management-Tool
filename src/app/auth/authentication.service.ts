import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private db:AngularFireDatabase,private afAuth:AngularFireAuth, private router:Router) { }

  login(username:string,password:string){
    console.log(username);
    console.log(password);
    if(username && password){
      this.afAuth.auth.signInWithEmailAndPassword(username,password);
      return this.afAuth.authState;
    }  
  }

  logout(){
    console.log("clicked");
    this.afAuth.auth.signOut();
    this.router.navigate(['/home']);
  }
}
