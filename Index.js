

let shopping={
    "orange":30,
    "pine":20,
    "apple":5,
    purchase:function (fruits,price){
        return `${price} ${fruits} for Ksh ${this.pine*price}` 
    }


}
console.log(shopping.purchase("pine",4))