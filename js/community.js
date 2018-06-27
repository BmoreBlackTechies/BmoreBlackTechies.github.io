$("#filter-button").click(function(){
  $(".filter-container-mobile").slideToggle();
}); // click filter button and filter options show

$(window).resize(function () {
if($(window).width() >= 640){
  $(".filter-container-mobile").hide();
} // the  mobile filter options will disappear on screen sizes above 640
});

$(".icons_menu").click(function(){
  $(".navlinksMobile").slideToggle();
}); // click on the mobile Navigation menu and the navigation links will drop down

$("#keywords").click(function(){
  $(".fa-search").css("color", "#188AE9");
    $("#keywords").focusout(function(){
      $(".fa-search").css("color", "grey");
    });
}); // click in the keywords input field and the icon will turn blue

$("#zipcode").click(function(){
  $(".fa-map-marker-alt").css("color", "#188AE9");
    $("#zipcode").focusout(function(){
      $(".fa-map-marker-alt").css("color", "grey");
    });
}); // click in the zipcode input field and the icon will turn blue

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
