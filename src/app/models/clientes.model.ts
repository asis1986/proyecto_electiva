
//Módelo para clientes

//clase que contendrá los datos del cliente
export class Cliente{
//inyectamos los datos del cliente
constructor(
public cedula:string,
public primer_nombre:string,
public segundo_nombre:string,
public primer_apellido:string,
public segundo_apellido:string,
public telefono:string,
public contrasenna: string,
public correo: string,
public activo = 1
){}




}