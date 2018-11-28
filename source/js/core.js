// const nav = document.querySelector(".menu");
// const burger = document.querySelector(".burger");
// function burgerIt(){
//
//   nav.classList.toggle("is-active");
//   burger.classList.toggle("is-active");
// }
//
// var selector = '.menu__link';
//
// $(selector).on('click', function(){
//     $(selector).removeClass('menu__link--is-active');
//     $(this).addClass('menu__link--is-active');
// });
//
// $(selector).on('click', function(){
//   burgerIt();
//   $('html').animate({
//       scrollTop: $( $(this).attr('href') ).offset().top
//   }, 800);
//   return false;
// });

var header = document.getElementById("header");

window.addEventListener('scroll', function(e) {
  var wScroll = window.scrollY;

  // Sticky nav
  if (wScroll > 80) {
    header.classList.add("slideUp");

  } else if (wScroll < 80) {
    header.classList.remove("slideUp");
  }

  // test 1

  var about = document.querySelector(".about");
  var cards = document.querySelectorAll(".card");
  if((window.innerHeight / 1.2) > about.getBoundingClientRect().top){

    Array.prototype.forEach.call(cards, function(el, i){
      setTimeout(function(){
        el.classList.add('is-showing');
      }, 250 * (i+1))
    });

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
