$("#section1__filter").click(function(){
  $(".section1__filter--mobile").slideToggle();
}); // click filter button and filter options show

$(window).resize(function () {
if($(window).width() >= 640){
  $(".section1__filter--mobile").hide();
} // the  mobile filter options will disappear on screen sizes above 640
});

$(".icons__menu").click(function(){
  $(".nav__mobile").slideToggle();
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

  $("#section1__search--button").on("click", function(){

}); //click on the search button to sort events by keywords
