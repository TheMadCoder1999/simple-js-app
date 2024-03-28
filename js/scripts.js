let pokemonRepository = (function () {
  let pokemonList = [
  {
  name: "Pikachu",
  height: 0.4,
  type: "electric",
  abilities: ["static", "lightningrod"],
  },
  
  {
  name: "Bulbasaur",
  height: 0.7,
  type: ["grass", "poison"],
  abilities: ["chlorophyll", "over-grow"],
  },
  
  {
  name: "Charmander",
  height: 0.6,
  type: "fire",
  abilities: ["blaze", "solar-power"],
  },
  
  {
  name: "Squirtle",
  height: 0.5,
  type: "water",
  abilities: ["rain-dish", "torrent"],
  },
  ];
  
  function add(pokemon) {
  if (
  typeof pokemon === "object" &&
  "name" in pokemon &&
  "height" in pokemon &&
  "type" in pokemon
  ) {
  pokemonList.push(pokemon); // Changed 'repository' to 'pokemonList'
  } else {
  console.log("pokemon is not correct");
  }
  }
  function getAll() {
  return pokemonList;
  }
  
  function showDetails(pokemon) {
    alert ('Pokedex Entry');
  }

  function addListItem(pokemon) {
  let listContainer = document.querySelector(".pokemon-list"); // Changed variable name to avoid conflict
  let listItem = document.createElement("li");
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("button-class");
  listItem.appendChild(button);
  listContainer.appendChild(listItem);

  button.addEventListener("click", function(event){
    showDetails(pokemon);
  })
}

  return {
  add,
  getAll,
  addListItem,
  showDetails
  };
  })();
  
  pokemonRepository.add({ name: "Lopunny", height: 1.0, type: ["normal"] });
  
  console.log(pokemonRepository.getAll());
  
  pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
  });