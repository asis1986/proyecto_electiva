import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
//import 'rxjs/add/operator/mapTo';

//Modelo de clientes.
import {Cliente} from '../models/clientes.model';
//import { Usuarios } from '../models/usuarios.model';
//Archivo de configuración global contiene url de la base de datos;
import { GLOBAL } from './global';
import { Observable } from 'rxjs';
import { Params } from '@angular/router';


@Injectable()


//se realiza un export para poder utilizar este archivo  fuera.
export class UserService {
  public url: string;

  constructor( private  _http:HttpClient) {
    this.url =GLOBAL.url;

   
   }

   //método para regístrar a un Usuario
  
  registercliente(cliente: Cliente): Observable <any> {
    let json = JSON.stringify(cliente);
    let params = "json=" + json;


    let headers = new HttpHeaders().set( 'Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post(this.url + 'ingresar-cliente', params, { headers: headers }).pipe(map((res :any)=>{
        
            swal("usuario creado", cliente.correo,  "success");

       return console.log(res);
     
    
    
    }));
    



   };
}
