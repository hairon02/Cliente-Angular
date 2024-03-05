export class Transaccion{
    id: number;
    id_usuario : number;
    id_juego : number;
    id_metodo_pago: number;
    fecha_compra: string;
    comentario: string;
    calificacion: number;
    cantidad: number;
    titulo: string
    precio:number;
    constructor() {
        this.id = 0;
        this.id_usuario = 0;
        this.id_juego = 0;
        this.id_metodo_pago = 0;
        this.fecha_compra = '';
        this.id = 0;
        this.comentario = '';
        this.calificacion = 0;
        this.cantidad = 0;
        this.titulo = '';
        this.precio = 0;
    }
}