$(document).ready(function () {
  $(".play-button").click(function () {
    $(".modal-canvas").toggleClass("hidden");
  });
  $(".modal-close").click(function () {
    $(".modal-canvas").toggleClass("hidden");
  });

  $(".header-bar").click(function () {
    document.querySelector(".nav-mobile").style.display = "block";
    document.querySelector(".header-close").style.display = "block";
    document.querySelector(".header-bars").style.display = "none";
  });

  $(".header-close").click(function () {
    document.querySelector(".nav-mobile").style.display = "none";
    document.querySelector(".header-close").style.display = "none";
    document.querySelector(".header-bars").style.display = "block";
  });
  $("body").toggleClass("lock");
});

function preloader() {
  $(document).ready(function () {
    $("#overflow").css("overflow", "hidden");
    setTimeout(function load() {
      let loading = $(".preloader");
      loading.css("display", "none");
      $("#overflow").css("overflow", "auto");
    }, 1500);
  });
}
preloader();
