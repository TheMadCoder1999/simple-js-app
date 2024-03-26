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
];

function add(pokemon) {
  if (
    typeof pokemon === "object" &&
    "name" in pokemon &&
    "height" in pokemon &&
    "types" in pokemon
  ) {
    repository.push(pokemon);
  } else {
    console.log("pokemon is not correct");
  }
}
function getAll() {
  return pokemonRepository;
}

function addListItem(pokemon){
  let pokemonList = document.querySelector(".pokemon-list");
  let listpokemon = document.createElement("li");
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("button-class");
  listpokemon.appendChild(button);
  pokemonList.appendChild(listpokemon);
}
return {
  add: add,
  getAll: getAll,
  addListItem: addListItem
};
})();

pokemonRepository.add({ name: "Lopunny", height: 1.0, type: ["normal"] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
pokemonRepository.addListItem(pokemon);
});
