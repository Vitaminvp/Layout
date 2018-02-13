(function($) {
$(function() {

  $('ul.tabs-menu').on('click', 'li:not(.selected)', function(e) {
    e.preventDefault();
    $(this).addClass('selected').siblings().removeClass('selected');
    $tabs = $('.tabs-content');
      if($(this).hasClass('g')){
          $tabs.find('div.tabs-content__item').removeClass('selected');
          $tabs.find('div.g').addClass('selected');
      }
      else if($(this).hasClass('w')){
          $tabs.find('div.tabs-content__item').removeClass('selected');
          $tabs.find('div.w').addClass('selected');
      }
      else if($(this).hasClass('b')){
          $tabs.find('div.tabs-content__item').removeClass('selected');
          $tabs.find('div.b').addClass('selected');
      }
      else if($(this).hasClass('v')){
          $tabs.find('div.tabs-content__item').removeClass('selected');
          $tabs.find('div.v').addClass('selected');
      }
      else if($(this).hasClass('p')){
          $tabs.find('div.tabs-content__item').removeClass('selected');
          $tabs.find('div.p').addClass('selected');
      }
      else{
          $tabs.find('div.tabs-content__item').addClass('selected');
      }
      return false;

  });

});
})(jQuery);