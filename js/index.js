$(function () {

  $('.parallax').each(function () {
    var el = this;

    $(window).scroll(function () {
      var wScroll = $(this).scrollTop();


      // --------------- Traditional Parallax ------------------
      if ($('header').height() > wScroll) {
        $('div[data-parallax]').each(function () {
          var paraValue = $(this).data('parallax');

          $(this).css({
            'transform' : 'translate(0px, '+ wScroll/paraValue +'%)'
          });
        });
      };
      
      // --------------- Landing Functions ----------------------
      $('.parallax.landing').each(function () {
        var el = $(this);
        var x = el.data('parallax-land-x');
        var y = el.data('parallax-land-y');
        
        if (wScroll < el.offset().top - ($(window).height() / 1.5) ) {
          el.css({
            'transform': 'translate(' + x + 'px,' + y + 'px)',
            'opacity': 0
          });
        } else {
          el.css({
            'transform': 'translate(' + 0 + 'px,' + 0 + 'px)',
            'opacity': 1
          });
        }

      });

      // ------------------ Promoscope ---------------------------
      if (wScroll > ($('.periscope').offset().top - $(window).height()/2 )) {

        $('.periscope').css({
          'background-position': 'center,' - (wScroll - $('.periscope').offset().top) +'px'
        });

        var opacity = wScroll * .00055;

        $('.tint').css({
          'opacity': opacity
        });
      }

      // -------------------- Floating Elements -----------------------
      if (wScroll > $('.floating').offset().top - $(window).height()) {

        var offset = Math.min(0, wScroll - $('.floating').offset().top + $(window).height() - 400);
        
        $('.floating-left').css({
          'transform': 'translateX(' + offset + 'px)'
        });

        $('.floating-right').css({
          'transform': 'translateX(' + Math.abs(offset) + 'px)'
        });

      }            

    });
  });
         
});