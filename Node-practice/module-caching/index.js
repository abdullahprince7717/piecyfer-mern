const SuperHero = require('./superHero');
console.log(SuperHero.getName());
SuperHero.setName("Superman");
console.log(SuperHero.getName());


// Module Caching

const NewSuperHero = require('./superHero');

console.log(NewSuperHero.getName()); // Superman because the module is cached



