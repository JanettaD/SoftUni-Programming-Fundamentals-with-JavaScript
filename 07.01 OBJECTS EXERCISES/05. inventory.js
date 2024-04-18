function inventory(arr){
    let heroRegister = [];

    for (let data of arr) {
        let [name,level,items] = data.split(" / ");
        let hero = {name, level: Number(level), items: items.split(", ")}

        heroRegister.push(hero);
    }
   
    heroRegister.sort((a,b) => a.level - b.level);

    for (let hero of heroRegister) {
        console.log(`Hero: ${hero.name}`)
        console.log(`level => ${hero.level}`)
        console.log(`items => ${hero.items.join(', ')}`);
        
    }
}
inventory([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ]);