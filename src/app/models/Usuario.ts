export class Usuario{
    id: number;
    nombre : string;
    nickname : string;
    correo: string;
    id_rol: number;
    password: string;

    constructor() {
        this.id = 0;
        this.nombre = '';
        this.nickname = '';
        this.correo = '';
        this.id_rol = 0;
        this.password = '';
    }
}