
var wScroll;
var bigName = document.querySelectorAll(".big-name > *")

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

  // BigName
  // if (wScroll) {
  //   Array.prototype.forEach.call(bigName, function(el, i){
  //     el.classList.add('is-showing')
  //   });
  // }


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
  var streamContainer = document.querySelector(".stream__window");
  var streamEmbed = '<iframe  src="https://player.twitch.tv/?channel=ahryess" width="640" height="360"  frameborder="0"   allowfullscreen="true"></iframe>'
  if(300 > stream.getBoundingClientRect().top){
    stream.classList.add('is-showing');
    // streamContainer.innerHTML = streamEmbed;
    // return;
  }

});

function showDescription(element){
  if(element.innerHTML == "...more"){
    element.innerHTML = "...less"
    element.previousSibling.classList.add('card__text--full');
  } else {
    element.innerHTML = "...more"
    element.previousSibling.classList.remove('card__text--full');
  }
}
