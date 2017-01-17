/**
 * Created by danilo-barros on 17/01/17.
 */

export class Video {
    id: number;
    titulo: string;
    url: string;
    desc: string;

    constructor(id: number, titulo: string, url: string, desc?: string) {
        this.id = id;
        this.titulo = titulo;
        this.url = url;
        this.desc = desc;
    }
}