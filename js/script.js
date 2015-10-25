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


$(".btn-nav__mobile").click(function() {
    
      $(".nav-content").toggleClass("nav-content__mobile animated bounceInRight");

      $(".content-web").toggleClass("blur-content-web");
      
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