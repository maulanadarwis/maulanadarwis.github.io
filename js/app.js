// ini animasi hamburger menu
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
})


// script gambar di kerjaan
$(document).ready(function() {
    TweenMax.set(".project-preview", { width: 0 });

    var tl = new TimelineLite();

    $(document)
      .on("mouseover", ".navigation-item", function(evt) {
        tl = new TimelineLite();
        tl.to($(".project-preview"), 1, {
          width: "600px",
          ease: Expo.easeInOut
        });
      })
      .on("mouseout", ".navigation-item", function(evt) {
        tl = new TimelineLite();
        tl.to($(".project-preview"), 0.5, {
          width: 0,
          ease: Expo.easeInOut
        });
      });
  });

  $(".navigation-link-1").hover(function() {
    $(".project-preview").css({ "background-image": "url(img/alibi.gif)" });
  });

  $(".navigation-link-2").hover(function() {
    $(".project-preview").css({ "background-image": "url(img/anyelir.gif)" });
  });

  $(".navigation-link-3").hover(function() {
    $(".project-preview").css({ "background-image": "url(img/insightid.gif)" });
  });

  $(".navigation-link-4").hover(function() {
    $(".project-preview").css({ "background-image": "url(img/gardenview.gif)" });
  });

  $(".navigation-link-5").hover(function() {
    $(".project-preview").css({ "background-image": "url(img/palmlagoon.gif)" });
  });

  $(".navigation-link-6").hover(function() {
    $(".project-preview").css({ "background-image": "url(img/session.gif)" });
  });

  $(".navigation-link-7").hover(function() {
    $(".project-preview").css({ "background-image": "url(img/shine.gif)" });
  });

  $(".navigation-link-8").hover(function() {
    $(".project-preview").css({ "background-image": "url(img/theview.gif)" });
  });

  $(window).scroll(function() {
    var scroll = $(window).scrollTop(),
      dh = $(document).height(),
      wh = $(window).height();
    scrollPercent = (scroll / (dh - wh)) * 100;
    $(".progressbar").css("height", scrollPercent + "%");
  });



  // PARALLAX

  function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
  }

  window.addEventListener("scroll", function() {
    parallax(".bintangbesar", window.scrollY, 0.5);
  });

  function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
  }

  window.addEventListener("scroll", function() {
    parallax(".colors", window.scrollY, 0.2);
  });



