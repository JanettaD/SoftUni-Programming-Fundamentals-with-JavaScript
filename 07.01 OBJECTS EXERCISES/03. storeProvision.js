function storeProvision(stock, orderedProducts) {
    let products = {};
    //on each interaction I will take two ellements, 0 and 1 index; 2 and 3rd index...
    for (let i = 0; i < stock.length; i += 2) {
        let productName = stock[i];
        //we convirt to a Number and take the next index of stock arr
        let qty = Number(stock[i + 1]);
        //get into the products object(which is still empty), create a key which will be the name of the product and the value will be qty;
        products[productName] = qty;
    }
    
    for (let j = 0; j < orderedProducts.length; j += 2) {
        let productName = orderedProducts[j];
        let qty = Number(orderedProducts[j + 1]);
        //if (products.hasOwnProperty(productName)- check if the object products has own property which is called product name
        //look if the current product name exists in the object products - this can be used only with objects
        if (productName in products) {
            //if yes- we get into the object with products, we will find exactly this key and we will add the current quantyty; 
            products[productName] += qty;
            //otherwise if we haven`t had it up until now
        } else {
            //if we haven`t had this product: we create a new key and value
            products[productName] = qty;
        }
    }

    //alternatively we can write kvp (key value pair) -  let kvp = Object.entries(products)
    let entries = Object.entries(products);
//every entrie here will be a mini array that will contain on index 0- the name of the product and on index 1 - the qty
    for (let entrie of entries) {
       console.log(`${entrie[0]} -> ${entrie[1]}`); 
    }
    
}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas','14', 'Pasta', '4', 'Beer', '2'],
['Flour', '44', 'Oil', '12', 'Pasta', '7','Tomatoes', '70', 'Bananas', '30']);