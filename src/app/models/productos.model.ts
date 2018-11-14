//contendrá los datos drelacionadoscon el producto

export class Producto{

  //inyectamos los atributos necesarios para la creación de la clase producto
  constructor(
  public codigo_producto: number,
  public nombre_producto:string,
  public precio: number

  ){}
}