$(document).ready(function() {
  // Listen events
  $('.btn-add').click(function() {
    // POST Add friend
    $.post('/api/users/' + this.id + '/friends', function(data) {
      $('#' + data.friend).html('<i class="fa fa-heart"></i>').removeClass('btn-add').unbind("click");
    })
  });
});
