var wScroll;
var bigName = document.querySelectorAll(".big-name > *");
var repeat;


Array.prototype.forEach.call(bigName, function(el, i){
  el.classList.add('is-showing')
});

window.addEventListener('scroll', function(e) {
  wScroll = window.scrollY;

  // Sticky nav
  if (wScroll > 80) {
    header.classList.add("slideUp");

  } else if (wScroll < 80) {
    header.classList.remove("slideUp");
  }

  // About
  var about = document.querySelector("section.about");
  var specialCard = document.querySelector(".card--special");
  var childSpecialCard = document.querySelectorAll('.card__body--special > *');

  if(300 > about.getBoundingClientRect().top){
    specialCard.classList.add('is-showing');
    Array.prototype.forEach.call(childSpecialCard, function(el, i){
        el.classList.add('is-showing');
    });
  }

  var smallCard = document.querySelectorAll(".card--small");
  Array.prototype.forEach.call(smallCard, function(el, i){
    if(550 > el.getBoundingClientRect().top){
      el.classList.add('is-showing');
    }
  });


  // Instagram
  var instaCard = document.querySelectorAll(".card--instagram");
  var instaCardChildren = document.querySelector(".card--instagram > * > *");

  Array.prototype.forEach.call(instaCard, function(el, i){
    if(550 > el.getBoundingClientRect().top){
      el.classList.add('is-showing');
    }
  });

  // Stream
  var stream = document.querySelector(".stream")
  if(400 > stream.getBoundingClientRect().top){
    stream.classList.add('is-showing');
  }

    // Lazy Load! :D
  var streamVideo = document.querySelector( ".stream__video");
  if(!repeat && 600 > stream.getBoundingClientRect().top){
    var iframe = document.createElement( "iframe" );

    iframe.setAttribute( "frameborder", "0" );
    iframe.setAttribute( "allowfullscreen", "" );
    iframe.setAttribute( "src", "https://player.twitch.tv/?channel=ahryess" );

    streamVideo.innerHTML = "";
    streamVideo.appendChild( iframe );
    repeat = true;
  }


});
