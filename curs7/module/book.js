import {Product} from "./product.js";


class Book extends Product {
    author;
    constructor (name,price,percent,author);
    super(name,price,percent);
    this.author=author;


}
export{Book};