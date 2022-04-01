
export interface ICar {
    id ?: string
    make: string;
    model: string
    year: string;
    price: string;
    imageURL: string
}
export class Car {
    make: string;
    model: string;
    year: string;
    price: string
    imageURL: string

    constructor(make:string, model:string, year:string, price: string,imageURL:string){
        
        this.make = make;
        this.model = model;
        this.year = year;
        this.price = price;
        this.imageURL = imageURL;

    }

}
