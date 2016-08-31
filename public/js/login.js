$(document).ready(function() {
  // Listen events
  $('#btn_signup').click(function() {
    // Show Form Sign Up
    console.log('Sign Up');
    $('#login_modal').addClass('active');
    $('#login_title').html('Sign Up');
    $('#submit_signup').removeClass('hide');
    $('#submit_login').addClass('hide');
    $('#name_input').removeClass('hide');
    $('#login_message_container').addClass('hide');
  });
  $('#btn_login').click(function() {
    // Show Form Log In
    console.log('Log In');
    $('#login_modal').addClass('active');
    $('#login_title').html('Log In');
    $('#submit_login').removeClass('hide');
    $('#submit_signup').addClass('hide');
    $('#name_input').addClass('hide');
    $('#login_message_container').addClass('hide');
  });
  $('#clear_login, #close_login').click(function() {
    // Clear modal
    $('#login_modal').removeClass('active');
  });
  $('#clear_login_message').click(function() {
    // Clear login messages
    $('#login_message_container').addClass('hide');
  });
  $('#submit_signup').click(function() {
    // POST Sign Up
    $.post('/api/signup', $('#login_form').serialize(), function(data) {
      if (data.error) {
        $('#login_message').html(data.message);
        $('#login_message_container').removeClass('hide');
      } else {
        window.location.href = "/";
      }
    })
  });
  $('#submit_login').click(function() {
    // POST Log In
    $.post('/api/login', $('#login_form').serialize(), function(data) {
      console.log(data);
      if (data.error) {
        $('#login_message').html(data.message);
        $('#login_message_container').removeClass('hide');
      } else {
        window.location.href = "/";
      }
    })
  });
})
