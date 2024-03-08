var pokemonRepository = (function () {
    let repository = [
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
    return{
      getAll:function(){
        return repository;

      },
      add:function(pokemon) {

        if(typeof pokemon ==='object ') {
        
        repository.push(pokemon);
        
        } else{
        console.log('You must insert a valid Pokemon! ');
        
        }
        
        }
        };
        
        })();
        
        var pokemons =pokemonRepository.getAll();
        
        for(var i= 0; i<pokemons.length; i++) {
        
        document.write('Name:'+pokemons[i].name +'<br>');
        
        document.write('Height:'+pokemons[i].height +'<br><br>');
        }
