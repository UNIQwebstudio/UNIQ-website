import '../scss/pages/index.scss';

var scrollToElement = require('scroll-to-element');
var relaxParallax = require('rellax');

const deviceWidth = screen.width;
const homeHeight = document.getElementsByClassName('home-wrap')[0].scrollHeight;
const side = document.querySelector('.side');
const projects = document.getElementsByClassName('project');
const mobileSide = document.querySelector('.side-inner-mobile');
const pointers = document.getElementsByClassName('point');
const sectionDetail = document.querySelector('.section-detail');
const sectionInner = document.querySelector('.section-detail h3');
const currentNavPosition = document.querySelector('.dott');

/*
============================ Initial params ======================================
*/

sectionDetail.style.top = "-115px";
sectionInner.innerHTML = "Home";

// Still have question

window.onunload = function() {
  console.log("Unload");
  window.scrollTo(0,0);
}

activeSlidePointer();

addRemoveListener();

/*
============================ Sidebar/mobile sidebar =============================
*/

window.onresize = function() {
  if(screen.height < 650 || screen.width < 1218) {
    side.style.display = "none";
    mobileSide.style.display = "flex";
  }
  else {
    side.style.display = "flex";
    mobileSide.style.display = "none";
  }

  addRemoveListener();
}

//==================== Mobile projects animation direction changed ===============

if(deviceWidth <= 1217) {
  for(let i = 1; i <= projects.length; i++){
    document.querySelector('.p'+i).style.transform = "translateX(100vw)";
  }
}

//===================== Projects hover animation ===========================

function addRemoveListener() {
  for(let i = 0; i < projects.length; i++) {
    if(screen.width > 1216) {
      projects[i].addEventListener("mouseover", function() {
        slideUp(i);
      });
      projects[i].addEventListener("mouseleave", function() {
        slideDown(i);
      });
    }
    else {
      projects[i].removeEventListener("mouseover", function(){});
      projects[i].removeEventListener("mouseleave", function(){});
    }
  }
}

function slideUp(target) {
  switch(target) {
    case 0:
    for(let i = 0; i < projects.length; i++) {
      if(i != target) {
        if(i < 2) {
          projects[i].style.transform = "translateX(3%)";
        }
        else {
          projects[i].style.transform = "translateY(3%)";
        }
      }
    }
    break;
    case 1:
    for(let i = 0; i < projects.length; i++) {
      if(i != target) {
        if(i < 2) {
          projects[i].style.transform = "translateX(-3%)";
        }
        else {
          projects[i].style.transform = "translateY(3%)";
        }
      }
    }
    break;
    case 2:
    for(let i = 0; i < projects.length; i++) {
      if(i != target) {
        if(i < 2) {
          projects[i].style.transform = "translateY(-3%)";
        }
        else {
          projects[i].style.transform = "translateX(3%)";
        }
      }
    }
    break;
    case 3:
    for(let i = 0; i < projects.length; i++) {
      if(i != target) {
        if(i < 2) {
          projects[i].style.transform = "translateY(-3%)";
        }
        else {
          if(i < target) {
            projects[i].style.transform = "translateX(-3%)";
          }
          else {
            projects[i].style.transform = "translateX(3%)";
          }
        }
      }
    }
    break;
    case 4:
    for(let i = 0; i < projects.length; i++) {
      if(i != target) {
        if(i < 2) {
          projects[i].style.transform = "translateY(-3%)";
        }
        else {
          if(i < target) {
            projects[i].style.transform = "translateX(-3%)";
          }
          else {
            projects[i].style.transform = "translateX(3%)";
          }
        }
      }
    }
    break;
  }
}

function slideDown(target) {
  switch(target) {
    case 0:
    for(let i = 0; i < projects.length; i++) {
      if(i != target) {
        if(i < 2) {
          projects[i].style.transform = "translateX(0%)";
        }
        else {
          projects[i].style.transform = "translateY(0%)";
        }
      }
    }
    break;
    case 1:
    for(let i = 0; i < projects.length; i++) {
      if(i != target) {
        if(i < 2) {
          projects[i].style.transform = "translateX(0%)";
        }
        else {
          projects[i].style.transform = "translateY(0%)";
        }
      }
    }
    break;
    case 2:
    for(let i = 0; i < projects.length; i++) {
      if(i != target) {
        if(i < 2) {
          projects[i].style.transform = "translateY(0%)";
        }
        else {
          projects[i].style.transform = "translateX(0%)";
        }
      }
    }
    break;
    case 3:
    for(let i = 0; i < projects.length; i++) {
      if(i != target) {
        if(i < 2) {
          projects[i].style.transform = "translateY(0%)";
        }
        else {
          projects[i].style.transform = "translateX(0%)";
        }
      }
    }
    break;
    case 4:
    for(let i = 0; i < projects.length; i++) {
      if(i != target) {
        if(i < 2) {
          projects[i].style.transform = "translateY(0%)";
        }
        else {
          projects[i].style.transform = "translateX(0%)";
        }
      }
    }
    break;
  }
}

window.onscroll = function() {

  //================== Projects block animation =============================

  if(window.pageYOffset >= (homeHeight - 300)){
    for(let i = 1; i <= projects.length; i++){
      document.querySelector('.p'+i).style.transform = "translateX(0)";
      document.querySelector('.p'+i).style.transitionDelay = "0s";
    }
  }

  activeSlidePointer();

}

//================== Active slide pointer animtion ==========================

function activeSlidePointer() {
  let aboutHeight = document.querySelector('.about-wrap').scrollHeight;
  let coord = homeHeight*2;
  coord+=aboutHeight;

  let contactHeight = document.querySelector('.contact-wrap').scrollHeight;
  let coord2 = coord + contactHeight;

  if(window.pageYOffset < homeHeight-300) {
    sectionDetail.style.transform = "translateY(0px)";
    sectionInner.textContent = "Home";
    currentNavPosition.style.transform = "translateY(0px) rotate(-45deg)";
  }
  else if(pageYOffset >= homeHeight-300 && pageYOffset < (homeHeight-300)*2){
    sectionDetail.style.transform = "translateY(85px)";
    sectionInner.textContent = "Projects";
    currentNavPosition.style.transform = "translateY(84px) rotate(-45deg)";
  }
  else if(pageYOffset >= (homeHeight*2)-300 && pageYOffset < coord-300) {
    sectionDetail.style.transform = "translateY(168px)";
    sectionInner.textContent = "About";
    currentNavPosition.style.transform = "translateY(168px) rotate(-45deg)";
  }
  else if(pageYOffset >= coord - 300 && pageYOffset < coord2 - 300) {
    sectionDetail.style.transform = "translateY(252px)";
    sectionInner.textContent = "Price";
    currentNavPosition.style.transform = "translateY(252px) rotate(-45deg)";
  }
  else if(pageYOffset >= coord2 - 300) {
    sectionDetail.style.transform = "translateY(336px)";
    sectionInner.textContent = "Contact";
    currentNavPosition.style.transform = "translateY(336px) rotate(-45deg)";
  }
}

//======================== Desktop sidebar event listener ========================

function animatedScroll(elem) {
  scrollToElement(elem, {
    ease: 'in-cube',
    duration: 1200
  });
}

pointers[0].addEventListener("click", function() {
  animatedScroll('.home-wrap');
})
pointers[1].addEventListener("click", function() {
  animatedScroll('.projects-wrap');
})
pointers[2].addEventListener("click", function() {
  animatedScroll('.about-wrap');
})
pointers[3].addEventListener("click", function() {
  animatedScroll('.price-wrap');
})
pointers[4].addEventListener("click", function() {
  animatedScroll('.contact-wrap');
})

document.querySelector('.arr-down').addEventListener("click", function() {
  animatedScroll('.projects-wrap');
})

/*
================================= Mobile sidebar ========================================
*/


window.$ = document.querySelector.bind(document);
window.$$ = document.querySelectorAll.bind(document);

let _animationActive = false;

function pointEventListener(point) {
  return point.addEventListener('click', () => {
    const activePoint = $('.side-inner-mobile__dot-mobile--active');

    if (_animationActive || point === activePoint) return;

    _animationActive = true;

    const offset = point.getBoundingClientRect().top - activePoint.getBoundingClientRect().top;

    activePoint.style.transform = `translateY(${offset}px) scale(1.2)`;
    point.style.transform = `translateY(${-offset}px)`;

    activePoint.addEventListener('transitionend', () => {
      activePoint.style.transform = '';
      point.style.transform = '';

      const _point = point.cloneNode();
      const _activePoint = activePoint.cloneNode();

      pointEventListener(_point);
      pointEventListener(_activePoint);

      activePoint.replaceWith(_point);
      point.replaceWith(_activePoint);

      for (let i = 0, points = $$('.side-inner-mobile__dot-mobile'); i < points.length; i++) {
        points[i].dataset.screen = i + 1;
      }

      _animationActive = false;
    });
  });
}

for (const point of $$('.side-inner-mobile__dot-mobile')) {
  pointEventListener(point);
}
