let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl='https://pokeapi.co/api/v2/pokemon/?limit=20';
  
  function add(pokemon) {
  if (
  typeof pokemon === "object" &&
  "name" in pokemon
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
    alert (`Pokedex Entry 
    Name: ${pokemon.name} 
    Height: ${pokemon.height}`);

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
  });
}

function loadList(){
  return fetch(apiUrl).then(function (response) {
    return response.json();
  }).then(function (json) {
    json.results.forEach(function (item) {
      let pokemon = {
        name: item.name,
        detailsUrs: item.url
      };
      add (pokemon);
      console.log(pokemon);
    });
  }).catch(function (e) {
    console.error(e);
  })
}

function loadDetails(item) {
  let url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    // Now we add the details to the item
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types;
  }).catch(function (e) {
    console.error(e);
  });
}

// function showDetails(pokemon) {
//   loadDetails(pokemon).then(function () {
//     console.log(pokemon);
//   });
// }

function showDetails(item) {
  pokemonRepository.loadDetails(item).then(function () {
    console.log(item);
  });
}

  return {
  add,
  getAll,
  addListItem,
  showDetails,
  loadList,
  loadDetails,
  showDetails
  };
  })();
  
  // pokemonRepository.add({ name: "Lopunny", height: 1.0, type: ["normal"] });
  
  // console.log(pokemonRepository.getAll());
  
  pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
  });