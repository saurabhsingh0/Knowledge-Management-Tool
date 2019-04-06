import { Component, OnInit } from '@angular/core';
import { MappingServiceService } from './services/mapping/mapping-service.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from "@angular/router";
import { AuthenticationService } from './auth/authentication.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  closeResult: string;
  email;
  password;
  userId;
  constructor(private mapiingService:MappingServiceService, private modalService: NgbModal, private afAuth:AngularFireAuth, private router:Router, private auth:AuthenticationService){
    //this.mapiingService.pushObject();
  }

  ngOnInit(){
    console.log("!@#$");
    console.log("ng on it");
    this.afAuth.authState.subscribe(res=>{
      if(res && res.uid){
        this.userId=res.uid;
        //this.router.navigate(['/pages/page1']);
      }
      else {
        //this.router.navigate(['/home']);
      }
      console.log(this.userId);
    });
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  login(){
    console.log(123);
    if(this.email && this.password){
      console.log(this.email);
      console.log(this.password);
      let loginObservable=this.auth.login(this.email,this.password);
      loginObservable.subscribe(res=>{
        console.log("res is");
        console.log(res);
        if (res && res.uid) {
          console.log('user is logged in '+ res.uid);
          this.userId=res.uid;
          if(this.userId){
            this.router.navigate(['/pages/page1']);
          }
        } else {
          console.log('user not logged in');
        }
      });
    }
    else {
      console.log("wrong password");
    }
  }

  logout(){
    let logout=window.confirm("Are you sure you want to logout?");
    console.log(logout);
    if(logout){
      this.userId='';
      this.auth.logout();
    }
  }
}
