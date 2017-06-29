$(document).ready(function() {

  displayPoke();

  $('img').click(function(){

    pokedexdisplay(this);
  })
});


function displayPoke()
{
  for(var i=1;i<152;i++)
  {
    var newimg='<img id='+i+' src="http://pokeapi.co/media/img/'+i+'.png">';
    $('#pokepic').append(newimg);
  }
}

function pokedexdisplay(poke)
{

  removePoke();
  var newpic=$(poke).clone();
  $('#pokedextop').append(newpic);
  $(newpic).addClass('pokedexpic');
  var pokeid=$(poke).attr('id');
  $.get("http://pokeapi.co/api/v1/pokemon/"+pokeid+"/", function(res) {
    $('#pokedexstat').append('<p id = "pokemonheader">'+res.name+'</p>');
    $('#pokedexstat').append('<p><span>Weight: </span>'+res.weight+'</p>');
    $('#pokedexstat').append('<p><span>Height:</span> '+res.height+'</p>');
    var html_str = "";
    html_str += "<p><span>Types</span></p>";
    html_str += "<ul>";
    for(var i = 0; i < res.types.length; i++) {
      html_str += "<li>" + res.types[i].name + "</li>";
    }
    html_str += "</ul>";
    $('#pokedexstat').append(html_str);
    }, "json");

}
function removePoke()
{
    $('.pokedexpic').remove();
    $('#pokedexstat').empty();


}
