/**
 * Created by danilo-barros on 17/01/17.
 */

export class Video {
    id: number;
    titulo: string;
    stringUrl: string;
    desc: string;

    constructor(id: number, titulo: string, stringUrl: string, desc?: string) {
        this.id = id;
        this.titulo = titulo;
        this.stringUrl = stringUrl;
        this.desc = desc;
    }
}