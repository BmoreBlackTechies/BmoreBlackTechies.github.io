$("#filter-button").click(function(){
  $(".filter-container-mobile").slideToggle();
}); // slide down toggle for sorting options

$(window).resize(function () {
if($(window).width() >= 640){
  $(".filter-container-mobile").hide();
}
});

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
    var value = $("#keywords").val().toLowerCase();
    console.log(value);
  $(".card").filter(function(){
    var isfound = $(this).text().toLowerCase().indexOf(value) > -1;
    if(isfound) {
        $(this).toggle(isfound);
    } else {
      alert('not found');
    }

 });
});
