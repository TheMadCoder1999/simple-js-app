let pokemonRepository=(function () {
let pokemonList = [
  {
    name: 'Pikachu',
    height: 0.4,
    type: 'electric',
    abilities: ['static', 'lightningrod']
  },

  {
    name: 'Bulbasaur',
    height: 0.7,
    type: ['grass', 'poison'],
    abilities: ['chlorophyll', 'over-grow']
  },

  {
    name: 'Charmander',
    height: 0.6,
    type: 'fire',
    abilities: ['blaze', 'solar-power']
  },

  {
    name: 'Squirtle',
    height: 0.5,
    type: 'water',
    abilities: ['rain-dish', 'torrent']
  },
]

return {
  add: function(pokemon){
    pokemonList.push(pokemon);
  },
  getAll: function(){
    return pokemonList;
  }
};
})();

console.log(pokemonRepository.getAll()); // []
pokemonRepository.add({ name: 'Lopunny' });
console.log(pokemonRepository.getAll()); // [ { name: 'Lopunny' } ]

pokemonList.forEach(function(user){
  document.write(pokemonRepository.getAll());
});


/*
for (let i=0; i < pokemonList.length; i++){

  var pokemonName = pokemonList[i].name
  var pokemonHeight = pokemonList[i].height

  let pokemonResult = `${pokemonName} ${pokemonHeight}`

  if(pokemonHeight > 0.6){
      pokemonResult = pokemonResult + " " +"Wow, that is big."
  }
  document.write(pokemonResult)
}
*/

/*
pokemonList.forEach(function(user){
  document.write(user.name + " " + 'is' + " " + user.height + " ");
});
*/