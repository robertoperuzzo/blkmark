$(function(){

  /*
  Using jQuery .click() Events to Override Hover Styles on Mobile.
   */
  $('a').on('touchend', function(e) {
      var el = $(this);
      var link = el.attr('href');
      window.location = link;
   });

  /*
  Mouse over Magazine Logo.
   */
  $('#tsk-logo').hover(function() {
    $('#no-bw').hide();
    $('#no-bw-crossed').removeClass('hidden');
    $('#bottom-black-photo').removeClass('hidden');
  }, function() {
    $('#no-bw').show();
    $('#no-bw-crossed').addClass('hidden');
    $('#bottom-black-photo').addClass('hidden');
  });

  /*
  Mouse over BlkMark Logo.
   */
  $('#blk-logo').hover(function() {
    $('#no-color').hide();
    $('#no-color-crossed').removeClass('hidden');
    $('#top-white-photo').removeClass('hidden');
  }, function() {
    $('#no-color').show();
    $('#no-color-crossed').addClass('hidden');
    $('#top-white-photo').addClass('hidden');
  });

});
