function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    $("#image").attr('src', profile.getImageUrl());
    $(".data").css("display", "block");
    $(".g-signin2").css("display", "none");
    $(".alert alert-primary").text("Home");
  }
  function signOut() {
          var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      alert('You signed out sucsessfully.');
      $(".g-signin2").css("display", "block");
      $(".data").css("display", "none");
      $(".games").css("display","none");
        });
  }