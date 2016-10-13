// $(document).ready(function() {
//   $(".fa-angle-down").on("click", function(event) {
//     if ($(".fa-angle-down").hasClass("open")) {
//       $(".fa-angle-down").removeClass("open").slideUp(700);
//     } else {
//       $(".fa-angle-down").addClass("open").slideDown(500);
//     }
//   });
// });
var scrolled=0;
$( document ).ready(function(){
    $("#arrow-1").on("click" ,function(){
        scrolled=scrolled+300;
        $("#projets").animate({
          scrollTop:  scrolled
        });
    });
  });
