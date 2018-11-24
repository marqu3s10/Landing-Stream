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

var initScroll = 0;
var actualScroll;
var header = document.getElementById("header");

window.addEventListener('scroll', function(e) {
  actualScroll = window.scrollY;

  // Scrolling down
  if (initScroll < actualScroll && actualScroll > 80) {
    header.classList.add("slideUp");

  } else if (actualScroll < 80) {
    header.classList.remove("slideUp");
  }

  initScroll = actualScroll;
});

// document.querySelector("card__more").addEventListener("click", showDescription);


function showDescription(element){
  if(element.innerHTML == "...more"){
    element.innerHTML = "...less"
    element.previousSibling.classList.add('card__text--full');
  } else {
    element.innerHTML = "...more"
    element.previousSibling.classList.remove('card__text--full');
  }
}
