var wScroll;
var bigNameChildren = document.querySelectorAll(".big-name > *");
var repeat;


Array.prototype.forEach.call(bigNameChildren, function(el, i){
  el.classList.add('is-showing')
});

window.addEventListener('scroll', function(e) {
  wScroll = window.scrollY;

  // Sticky nav
  if (wScroll > 80) {
    header.classList.add("sticky");

  } else if (wScroll < 80) {
    header.classList.remove("sticky");
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
    if(400 > el.getBoundingClientRect().top){
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

  // Form
  var form = document.querySelector(".form");
  if(400 > form.getBoundingClientRect().top){
    form.classList.add('is-showing')
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

// Nav
var menuLinks = document.querySelectorAll('.menu__link');
var active = "menu__link--is-active";
var form = document.querySelector(".form");

for (var i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", function() {
    var hiddenLink = document.getElementById(this.dataset.link);
    var current = document.querySelector("." + active);

    current ? current.classList.remove(active): null;
    this.classList.add(active);

    scrollTo(hiddenLink.offsetTop - this.dataset.space, 800);
  });
}

const
scrollTo = function(to, duration) {
    const
    element = document.scrollingElement || document.documentElement,
    start = element.scrollTop,
    change = to - start,
    startDate = +new Date(),

    easeInOutQuad = function(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    },
    animateScroll = function() {
        const currentDate = +new Date();
        const currentTime = currentDate - startDate;
        element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
        if(currentTime < duration) {
            requestAnimationFrame(animateScroll);
        }
        else {
            element.scrollTop = to;
        }
    };
    animateScroll();
};
