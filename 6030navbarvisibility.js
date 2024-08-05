$(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 10) {
        $(".navbar").addClass("shrink");
      } else {
        $(".navbar").removeClass("shrink");
      }
      if (scroll >= 300) {
        $(".navbar").addClass("fixed-top");
      } else {
        $(".navbar").removeClass("fixed-top");
      }
    });
