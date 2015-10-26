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


$(window).on('resize',function() {
    var ecra = $(window).width();
  if (ecra < 970) {
    $(".my-menu").css({"bottom":"0px"});    
  } 
  else 
  {
    $(".my-menu").css({"left":"0px"});
  }
});
$(document).ready(function() {
    $(window).trigger('resize');
});


$(function(){
  var largura = $(".wrapper-web").width();
  var altura = ($(window).height() - 140);
  $(".row__carousel").css({"width":largura, "height":altura});
  console.log(altura);
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