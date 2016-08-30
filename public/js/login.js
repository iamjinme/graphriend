$(document).ready(function() {
  // Listen events
  $('#btn_signup').click(function() {
    // Sign Up
    console.log('Sign Up');
    $('#login_modal').addClass('active');
    $('#login_title').html('Sign Up');
    $('#submit_signup').removeClass('hide');
    $('#submit_login').addClass('hide');
    $('#name_input').removeClass('hide');
  });
  $('#btn_login').click(function() {
    // Sign Up
    console.log('Log In');
    $('#login_modal').addClass('active');
    $('#login_title').html('Log In');
    $('#submit_login').removeClass('hide');
    $('#submit_signup').addClass('hide');
    $('#name_input').addClass('hide');
  });
  $('#clear_login, #close_login').click(function() {
    // Clear modal
    $('#login_modal').removeClass('active');
  });
  $('#clear_login_message').click(function() {
    $('#login_message_container').addClass('hide');
  });
})
