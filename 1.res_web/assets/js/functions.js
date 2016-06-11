$(function(){
  smoothScroll(1000);
  workBelt();
  workLoad();
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

function workLoad(){
  $.ajaxSetup({ cache: true });

  $('.thumb-unit').click(function(){
    var $this = $(this),
        newTitle = $this.find('strong').text(),
        newFile = $this.data('file'),
        spinner = '<div class="loader">Loading...</div>',
        newHTML = '/projects/' + newFile +'.html';
    $('.project-load').html(spinner).load(newHTML);
    $('.project-title').text(newTitle);
  });
};
