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
for (let i=0; i < pokemonList.length; i++){

  var pokemonName = pokemonList[i].name
  var pokemonHeight = pokemonList[i].height

  let pokemonResult = `${pokemonName} ${pokemonHeight}`

  if(pokemonHeight > 0.6){
      pokemonResult = pokemonResult + " " +"Wow, that is big."
  }
  document.write(pokemonResult)
}