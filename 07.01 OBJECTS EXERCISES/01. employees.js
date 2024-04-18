function employees(arr) {
    for (let name of arr) {
        //we create an object - employee with a key (property) - employeeName and value: name length 
        let employee = {employeeName : name , personalNum : name.length}
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
        
//         ]);