$("#filter-button").click(function(){
  $("#toggle-filter").slideToggle();
}); // slide down toggle for sorting options

$(".navbar-icon").click(function(){
  $(".navlinks").slideToggle();
}); // slide down toggle for navigation

$(".search-input").click(function(){
  $(".fa-search").css("color", "blue");
}); // search icon turns blue when you click on input field

$(".search-input").focusout(function(){
  $(".fa-search").css("color", "grey");
}); // search icon turns grey when you click outside of input field
