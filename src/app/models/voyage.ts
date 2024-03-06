import { Images } from "./images";

export class Voyage {
    destination?: string;
    id?: number;
    lattitude?: number;
    longitude?: number;
    mainPicture?:Images ;
    nbStar?: number;
    pictures?: Images[];
    type?: string;

    constructor(destination?: string, id?: number, lattitude?: number, 
        longitude?: number, mainPicture?: Images, nbStar?: number, pictures?: Images[], type?: string){
            this.id = id;
            this.destination = destination;
            this.lattitude = lattitude;
            this.mainPicture = mainPicture;
            this.pictures = pictures;
            this.nbStar = nbStar;
        }
}
