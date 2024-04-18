function makeAdictionary(jsonStrings) {
    let dictionary = {};

  // Parse the JSON strings and merge them into the dictionary
  for (let jsonString of jsonStrings) {
    let data = JSON.parse(jsonString);
    //for...in loop is a JavaScript construct used to iterate over the properties (keys) of an object
    for (let term in data) {
//Inside the loop, for each term (key) in data, the corresponding value (data[term]) is copied to the dictionary object. 
      dictionary[term] = data[term];
    }
  }
   // Sort the dictionary by terms
   let sortedDictionary = {};
   Object.keys(dictionary).sort().forEach((term) => {
     sortedDictionary[term] = dictionary[term];
   });
     // Print the sorted dictionary
  for (let term in sortedDictionary) {
    let definition = sortedDictionary[term];
    console.log(`Term: ${term} => Definition: ${definition}`);
  }
}

makeAdictionary(['{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}', 
'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}', 
'{"Boiler":"A fuel-burning apparatus or container for heating water."}',
'{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
'{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}']);