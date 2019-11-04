import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styles: []
})
export class ProtegidaComponent implements OnInit {

   profile:any;

  constructor(public auth:AuthService) {  }

  ngOnInit() {
     if (this.auth.userProfile$){
         this.profile = this.auth.userProfile$;
         this.profile = this.profile.source._value;
      } else {
         console.log("no logeado");
      }
  }

}
