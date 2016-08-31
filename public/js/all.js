$(document).ready(function() {
  // Listen events
  $('.btn-add').click(function() {
    // POST Add friend
    $.post('/api/users/' + this.id + '/friends', function(data) {
      console.log(data);
    })
  });

});
