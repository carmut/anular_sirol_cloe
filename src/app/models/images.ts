export class Images {
    alt?: string;
    id?: number;
    src?: string;
    voyage?: string

    constructor(alt?: string, id?: number, src?: string, voyage?: string) {
        this.id = id;
        this.src = src;
        this.alt = alt;
        this.voyage =voyage;
    }
}
