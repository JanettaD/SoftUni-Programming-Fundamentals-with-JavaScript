function movies(arr) {
    let movies = [];
//for every command of the arr- takes each string
    for (let command of arr){
        //includes can be used in array and string
        if (command.includes("addMovie") ) {
            //movie name is the command splited by "addMovie " on index 1;  
           let movieName = command.split("addMovie ")[1];
           let movieObj = { name: movieName };
           movies.push(movieObj);
        } else if (command.includes("directedBy")){
            let [movieName, directorName] = command.split (" directedBy ");
            //get into the arr. movie and find this movie which name (the movie is an object that has a key name) is the same like the name of the movie I am looking for;
            //find returns either true or undefined & we can use it for arr.
            let movie = movies.find(movie => movie.name == movieName);
            //if true , if its find - it will return an object
            if (movie) {
                //i want to add a key director with value directorName
                movie.director = directorName;
            }

        } else if (command.includes("onDate")){
            let[movieName, date] = command.split(" onDate ");
            let movie = movies.find(movie => movie.name == movieName);
            if (movie) {
                movie.date = date;
            }
        }
    }
    //for each movie from the existing movies
    for (let movie of movies) {
        //we check if the first movie and checks if it has name, director and date
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie)); 
        }
    }
}
movies([

    'addMovie Fast and Furious',
    
    'addMovie Godfather',
    
    'Inception directedBy Christopher Nolan',
    
    'Godfather directedBy Francis Ford Coppola',
    
    'Godfather onDate 29.07.2018',
    
    'Fast and Furious onDate 30.07.2018',
    
    'Batman onDate 01.08.2018',
    
    'Fast and Furious directedBy Rob Cohen'
    
    ]);