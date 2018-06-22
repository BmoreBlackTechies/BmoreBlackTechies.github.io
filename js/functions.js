$("#filter-button").click(function(){
  $("#toggle-filter").slideToggle();
}); // slide down toggle for sorting options

$(".navbar-icon").click(function(){
  $(".navlinksMobile").slideToggle();
}); // slide down toggle for navigation

$("#search-input").click(function(){
  $(".fa-search").css("color", "blue");
}); // search icon turns blue when you click on input field

$("#search-input").focusout(function(){
  $(".fa-search").css("color", "grey");
}); // search icon turns grey when you click outside of input field

  $("#search-button").on("click", function(){
    var value = $("#search-input").val().toLowerCase();
  $(".card").filter(function(){
    var isfound = $(this).text().toLowerCase().indexOf(value) > -1;
    if(isfound) {
        $(this).toggle(isfound);
    } else {
      alert('not found');
    }


    console.log(value, "This is a test");

 });
});
