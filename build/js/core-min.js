var wScroll,bigNameChildren=document.querySelectorAll(".big-name > *"),repeat;Array.prototype.forEach.call(bigNameChildren,function(e,t){e.classList.add("is-showing")}),window.addEventListener("scroll",function(e){wScroll=window.scrollY,wScroll>80?header.classList.add("sticky"):wScroll<80&&header.classList.remove("sticky");var t=document.querySelector("section.about"),o=document.querySelector(".card--special"),r=document.querySelectorAll(".card__body--special > *");300>t.getBoundingClientRect().top&&(o.classList.add("is-showing"),Array.prototype.forEach.call(r,function(e,t){e.classList.add("is-showing")}));var n=document.querySelectorAll(".card--small");Array.prototype.forEach.call(n,function(e,t){400>e.getBoundingClientRect().top&&e.classList.add("is-showing")});var c=document.querySelectorAll(".card--instagram"),i=document.querySelector(".card--instagram > * > *");Array.prototype.forEach.call(c,function(e,t){550>e.getBoundingClientRect().top&&e.classList.add("is-showing")});var l=document.querySelector(".stream");400>l.getBoundingClientRect().top&&l.classList.add("is-showing");var s=document.querySelector(".form");400>s.getBoundingClientRect().top&&s.classList.add("is-showing");var a=document.querySelector(".stream__video");if(!repeat&&600>l.getBoundingClientRect().top){var d=document.createElement("iframe");d.setAttribute("frameborder","0"),d.setAttribute("allowfullscreen",""),d.setAttribute("src","https://player.twitch.tv/?channel=ahryess"),a.innerHTML="",a.appendChild(d),repeat=!0}});for(var menuLinks=document.querySelectorAll(".menu__link"),active="menu__link--is-active",form=document.querySelector(".form"),i=0;i<menuLinks.length;i++)menuLinks[i].addEventListener("click",function(){var e=document.getElementById(this.dataset.link),t=document.querySelector("."+active);t&&t.classList.remove(active),this.classList.add(active),scrollTo(e.offsetTop-this.dataset.space,800)});const scrollTo=function(e,t){const o=document.scrollingElement||document.documentElement,r=o.scrollTop,n=e-r,c=+new Date,i=function(e,t,o,r){return(e/=r/2)<1?o/2*e*e+t:(e--,-o/2*(e*(e-2)-1)+t)},l=function(){const s=+new Date,a=s-c;o.scrollTop=parseInt(i(a,r,n,t)),a<t?requestAnimationFrame(l):o.scrollTop=e};l()};