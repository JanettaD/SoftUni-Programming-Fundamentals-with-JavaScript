function catalogue(input) {
    //initialise an empty object products to store the product catalog. 
    //The keys in this object will be the initials of the product names.
    let products = {};
  
    // We parse each input line to extract the product name and price
    // We determine the initial letter of the product name to group them accordingly.
    for (let line of input) {
      let [name, price] = line.split(' : ');
      let initial = name[0];
  // (!products[initial] checks if products object doesn`t have a property with the key initial
      if (!products[initial]) {
        //In this case, it initializes an empty array [] as the value associated with the initial key.
        products[initial] = [];
      }
  //we push new object (with two properties: name as key and price as value) into that array
      products[initial].push({ name, price: parseFloat(price) });
    }
  
    // Sort the catalog by group initial and product name
    let sortedInitials = Object.keys(products).sort();
  
    for (let initial of sortedInitials) {
      console.log(initial);
  //accesses the products object and targets the property associated with the key initial. 
  //This property is an array containing products with names that start with the same initial letter.
      products[initial]
      //localeCompare function is used for a case-insensitive comparison
      .sort((a, b) => a.name.localeCompare(b.name))
      //The forEach method is used to iterate over each product in the sorted array.
      .forEach((product) => {
        console.log(`  ${product.name}: ${product.price}`);
      });
    }
  }
catalogue ([

    'Appricot : 20.4',
    
    'Fridge : 1500',
    
    'TV : 1499',
    
    'Deodorant : 10',
    
    'Boiler : 300',
    
    'Apple : 1.25',
    
    'Anti-Bug Spray : 15',
    
    'T-Shirt : 10'
])