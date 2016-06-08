$(function(){
  smoothScroll(1000);
  workBelt();
});

function smoothScroll(duration){
  $('a[href^="#"]').on('click', function(event){
    var target = $($(this).attr('href'));
    if(target.length){
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, duration);
    }
  });
};

function workBelt(){
  $('.thumb-container .thumb-unit').click(function(){
    $('.work-belt').addClass("slided");
    $(".project-expand").show();
  });

  $(".thumb-return").click(function(){
    $('.work-belt').removeClass("slided");
    $(".project-expand").hide(800);
  });

};
