function employees(arr) {
    for (let name of arr) {
        //we create an object- employee with a key(property) - employeeName and value: name length (that we take from each interaction of the arr)
        let employee = {employeeName : name , personalNum : name.length}
        //to access a particular property of an object we put: the name of the object.property Name
        console.log(`Name: ${employee.employeeName} -- Personal Number: ${employee.personalNum}`);
    }

}
employees([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ]);

//    employees ([

//         'Samuel Jackson',
        
//         'Will Smith',
        
//         'Bruce Willis',
        
//         'Tom Holland'
        
//         ])