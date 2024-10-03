export class Book {
    id : number;
    name : string;
    author : string;
    description : string;
    price : number;
   quantity : number;
   imageUrl: string; 

    constructor(id:number, name:string, author: string, description:string, price:number, quantity:number, imageUrl:string){
        this.id = id;
        this.name = name;
        this.author = author;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.imageUrl = imageUrl;
    }
}