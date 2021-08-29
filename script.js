$('form button[type="button"]').click(function() {

  // FIRST NAME 
    var firstname = $('#firstname');
    var firstname_error = $('.firstname_error');
  
    if (firstname.val().length > 3) {
      firstname_error.addClass('d-none');
      console.log('firstname OK');
    } else {
      firstname_error.removeClass('d-none');
      firstname.addClass('input-error');
    }

  // LAST NAME 

  var lastname = $('#lastname');
  var lastname_error = $('.lastname_error');

  if (lastname.val().length > 3) {
    lastname_error.addClass('d-none');
    console.log('lastname ok');
  } else {
    lastname_error.removeClass('d-none');
    lastname.addClass('input-error');
  }

  //EMAIL

  var email = $('#email');
  var email_error = $('.email_error');
  if (email.val().match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) != null) {
    console.log('Email Ok');
    email_error.addClass('d-none');
  } else {
    email_error.removeClass('d-none');
    email.addClass('input-error');
  }

  //PASSWORD 
  var password = $('#password');
  var pass_error = $('.password_error');
  if (password.val().length >= 5) {
    pass_error.addClass('d-none');
  } else {
    pass_error.removeClass('d-none');
    password.addClass('input-error');
  }
})