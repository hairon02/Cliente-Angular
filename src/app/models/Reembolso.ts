export class Reembolso{
    id: number;
    id_transacciones : number;
    fecha_reembolso : string;
    titulo: string;
  
    constructor() {
        this.id = 0;
        this.id_transacciones = 0;
        this.fecha_reembolso = '';
        this.titulo = '';

    }
}