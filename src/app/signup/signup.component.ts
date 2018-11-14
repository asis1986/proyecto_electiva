import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../signin/signin.component.css']
})
export class SignupComponent implements OnInit {


  formulario_signup:FormGroup;
  constructor() { }

  ngOnInit() {
  
    this.formulario_signup = new FormGroup({
    correo: new FormControl(null, [Validators.required, Validators.email]),
      nombre_usuario: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)

    })
   
  }


  registrarUsuario(){
    console.log(this.formulario_signup.value);
  }
}
