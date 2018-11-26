import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Cliente } from '../models/clientes.model';
import { UserService } from '../services/user.service';
import swal from "sweetalert";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../signin/signin.component.css'],
  providers:[UserService]

})
export class SignupComponent implements OnInit {

 // public cliente: Cliente;
  public status: string;
  formulario_signup:FormGroup;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    public  _userService: UserService
  ) {
    
   }

  ngOnInit() {
  
    this.formulario_signup = new FormGroup({
      cedula: new FormControl(null, [Validators.required, Validators.email]),
      primer_nombre: new FormControl(null, Validators.required),
      segundo_nombre: new FormControl(null),
      primer_apellido: new FormControl(null, Validators.required),
      segundo_apellido: new FormControl(null),
      telefono: new FormControl(null),
      password: new FormControl(null, Validators.required),
      correo: new FormControl(null, Validators.required)
    
    })
   
  }

  
  registrarUsuario(){
    
   
//se le pasan los datos recibidos desde el formulario a la clase cliente
      let cliente = new Cliente(
      this.formulario_signup.value.cedula,
      this.formulario_signup.value.primer_nombre,
      this.formulario_signup.value.segundo_nombre,
      this.formulario_signup.value.primer_apellido,
      this.formulario_signup.value.segundo_apellido,
      this.formulario_signup.value.telefono,
      this.formulario_signup.value.password,
      this.formulario_signup.value.correo
    );

    
   this._userService.registercliente(cliente).subscribe(
     res =>{
        if(res = res.cliente){
          this._router.navigate(['/signin']);
          swal("OK", "Regístro Exítoso", "success");
        }
       
     }
   )
     
   
  //captura los datos del formulario
    
   // swal("OK", "Regístro Exítoso", "success");
  }
}
