import { Images } from "./images";

export class VoyageForm {
    destination?: string;
    lattitude?: number;
    longitude?: number;
    mainPicture?:Images ;
    nbStar?: number;
    pictures?: Images[];
    type?: string;

    constructor(destination?: string, lattitude?: number, 
        longitude?: number, mainPicture?: Images, nbStar?: number, pictures?: Images[], type?: string){
            this.destination = destination;
            this.lattitude = lattitude;
            this.mainPicture = mainPicture;
            this.pictures = pictures;
            this.nbStar = nbStar;
            this.type = type;
        }
}
