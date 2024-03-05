export class Carrito{
    id: number;
    id_usuarios : number;
    id_juegos : number;
    cantidad: number;
    titulo : string;
    constructor() {
        this.id = 0;
        this.id_usuarios = 0;
        this.id_juegos = 0;
        this.cantidad = 0;
        this.titulo = '';
 
    }
}