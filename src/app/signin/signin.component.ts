import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import   swal from 'sweetalert';
@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})
export class SigninComponent implements OnInit {
  formulario_signin: FormGroup;
  constructor() {}

  ngOnInit() {
    this.formulario_signin = new FormGroup({
      correo: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    });
  }

  loginUser(){
  
    swal("OK","Regístro Exítoso", "success");
  }
}
