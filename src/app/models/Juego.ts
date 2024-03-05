export class Juego{
    id: number;
    titulo : string;
    descripcion : string;
    genero: string;
    fecha_lanzamiento: string;
    precio: number;
    estado: string;
    id_usuario: number;
    ganancia_total: number;
    constructor() {
        this.id = 0;
        this.titulo = '';
        this.descripcion = '';
        this.genero = '';
        this.fecha_lanzamiento = '';
        this.precio = 0;
        this.estado = 'alta';
        this.id_usuario = 0;
        this.ganancia_total=0;
    }
}