let pokemonRepository=function(){let t=[],e=document.querySelector(".modal");function n(){e.classList.remove("is-visible")}function i(e){t.push(e)}function o(){return t}function a(t){return fetch(t.detailsUrl).then(function(t){return t.json()}).then(function(e){t.imageUrl=e.sprites.front_default,t.height=e.height,t.types=e.types}).catch(function(t){console.error(t)})}return window.addEventListener("keydown",t=>{t.key===ESC&&e.classList.contains("is-visible")&&n()}),e.addEventListener("click",t=>{t.target===e&&n()}),{add:i,getAll:o,addListItem:function t(e){let n=document.querySelector(".pokemon-List"),i=document.createElement("li"),o=document.createElement("button");o.innerText=e.name,o.classList.add("button-class"),o.setAttribute("data-target","#exampleModal"),o.setAttribute("data-toggle","modal"),i.classList.add("list-group-item"),i.appendChild(o),n.appendChild(i),o.addEventListener("click",function(){(function t(e){a(e).then(function(){var t;t=e,$(".modal-body").html(`<img class = 'modal-img' src = ${t.imageUrl} style ='width:50%'> 
  <p> height: ${t.height}</p> `),$(".modal-title").html("<h1>"+t.name+"</h1>"),$(".modal-body").html(`<img class = 'modal-img' src = ${t.imageUrl} style ='width:50%'> 
                      <p> height: ${t.height} </p> 
                      <p> Type: ${t.types.map(t=>t.type.name).join(", ")} </p>`)})})(e)})},loadList:function t(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function(t){return t.json()}).then(function(t){t.results.forEach(function(t){i({name:t.name,detailsUrl:t.url})})}).catch(function(t){console.error(t)})},loadDetails:a}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})}),pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)});