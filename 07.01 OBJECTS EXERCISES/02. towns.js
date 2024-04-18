function towns(arr) {
    //we will first iterate through the array so we can access each town;
    for (let currentTown of arr) {
        //we split the each string town to an array of substrings, base on the specific delimiter (" | ")
        //we also use the [array destructuring] so we can take each tokens from the array straight away. The value of the first element of the array is townName...etc
       let [townName, latitude, longitude] = currentTown. split (" | ");
       //we first convirt to number and then Fix to the second decimal point...we can`t fix a string
       latitude = Number(latitude).toFixed(2);
       longitude = Number(longitude).toFixed(2);

       let town = {};

       town.town = townName;
       town.latitude = latitude;
       town.longitude = longitude;

       console.log(town);
        
    }
    
}
towns (['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625']);