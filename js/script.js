

/*ATIVAR AUTOMATICAMENTE OS BOTOES DO NAV CONFORME ESTEJAM ATIVADOS*/

$(function() { 

  var links = $("#myNavbar a");
  $(window).scroll(function() {
    var topScroll = $(window).scrollTop();
    links.each(function() {
      var href       = $(this).attr('href');
      var el         = $(href);
      var posSection = el.offset().top;
      var hSection   = el.height();

      if(posSection <= topScroll && (posSection + hSection) > topScroll){
        links.removeClass("active");
        $(this).addClass("active");        
      }
      else 
      {
        $(this).removeClass("active");
      }
    })

  })
});

/*ENTRADA DO NAV*/
$(".my-menu").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', drawnPc());
    
/*NAV MOBILE ALL*/
$(".my-menu").on('swiperight', function() {
  alert("You swiped!");
});







/*
$(document).ready(function() {

  $(".banner").css({"height": $(window).height() + "px"});  

  $(window).scroll(function() {

    var scroll = $(window).scrollTop();

    if (scroll > $(window).height())
    {
      $(".my-info-nav").css({"display": "block", "margin-left": "0px"});

    }
    else
    {
      $(".my-info-nav").css({"display":"none"});
    }

  });

});*/