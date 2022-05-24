import {Product}from'./product.js';
import {Book } from "./book.js";


class Basket{
    constructor() {
        this.Product= [];
        addProduct(amount, Product){
            this.Product.push (...Array(amount).fill(Product));
        }
        calcTotal(){
            return.this.product
            .map(product =>product,price);
            .reduce ((a ,b)=>a+b,0);
        }
        printShoppingInfo(){
            console.log("Total:" +this.calcTotal());
        }
    }

}
export{Basket};