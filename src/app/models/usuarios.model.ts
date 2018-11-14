//Módelo que contendrá los datos para realizar el logueo de un cleiente



//clase que contendrá los datos del cliente a loguear
export class Usuario{

  //inyectamos los atributos necesarios para crear la clase Usuario
  constructor(
  public codigo_usuario:number,
  public cliente_cedula:string,
  public nombre_usuario:string,
  public correo:string,
  public contrasenna:string,
  public activo: boolean


  ){}
}