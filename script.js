

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)

    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('fa-bars')
    this.classList.toggle('fa-times')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '#navbar .nav-link', function(e) {
    let section = select(this.hash)
    if (section) {
      e.preventDefault()

      let navbar = select('#navbar')
      let header = select('#header')
      let sections = select('section', true)
      let navlinks = select('#navbar .nav-link', true)

      navlinks.forEach((item) => {
        item.classList.remove('active')
      })

      this.classList.add('active')

      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('fa-bars')
        navbarToggle.classList.toggle('fa-times')
      }

      if (this.hash == '#header') {
        header.classList.remove('header-top')
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        return;
      }

      if (!header.classList.contains('header-top')) {
        header.classList.add('header-top')
        setTimeout(function() {
          sections.forEach((item) => {
            item.classList.remove('section-show')
          })
          section.classList.add('section-show')

        }, 350);
      } else {
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        section.classList.add('section-show')
      }

      scrollto(this.hash)
    }
  }, true)

  /**
   * Activate/show sections on load with hash links
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      let initial_nav = select(window.location.hash)

      if (initial_nav) {
        let header = select('#header')
        let navlinks = select('#navbar .nav-link', true)

        header.classList.add('header-top')

        navlinks.forEach((item) => {
          if (item.getAttribute('href') == window.location.hash) {
            item.classList.add('active')
          } else {
            item.classList.remove('active')
          }
        })

        setTimeout(function() {
          initial_nav.classList.add('section-show')
        }, 350);

        scrollto(window.location.hash)
      }
    }
 });

 window.addEventListener('load', () => {
  let portfolioContainer = document.querySelector('.portfolio-container');
  if (portfolioContainer) {
    let portfolioIsotope = new Isotope(portfolioContainer, {
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    let portfolioFilters = document.querySelector('#portfolio-flters li', true)

    portfolioFilters.addEventListener('click', function(e) {
      portfolioFilters.forEach(function(el) {
        el.classList.remove('filter-active');
      });
      this.classList.add('filter-active');

      portfolioIsotope.arrange({
        filter: this.getAttribute('data-filter')
      });
    })
  }
})


})()



function openLink(evt, tabName){
  var i, tabcontent, filterlinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++){
    tabcontent[i].style.display = "none";
  }

  filterlinks = document.getElementsByClassName("filterlinks");
  for (filterlink of filterlinks){
    filterlink.classList.remove("filter-active");
  }
  

  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.classList.add("filter-active");
}


function openModal() {
  document.getElementById("myModal").style.display = "block";
}
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
function openDetails() {
  document.getElementById("portfolio-details").style.display = "block";
}
function closeDetails() {
  document.getElementById("portfolio-details").style.display = "none";
}


function openModal2() {
  document.getElementById("myModal2").style.display = "block";
}
function closeModal2() {
  document.getElementById("myModal2").style.display = "none";
}
function openDetails2() {
  document.getElementById("portfolio-details2").style.display = "block";
}
function closeDetails2() {
  document.getElementById("portfolio-details2").style.display = "none";
}

function openModal3() {
  document.getElementById("myModal3").style.display = "block";
}
function closeModal3() {
  document.getElementById("myModal3").style.display = "none";
}
function openDetails3() {
  document.getElementById("portfolio-details3").style.display = "block";
}
function closeDetails3() {
  document.getElementById("portfolio-details3").style.display = "none";
}

function openModal4() {
  document.getElementById("myModal4").style.display = "block";
}
function closeModal4() {
  document.getElementById("myModal4").style.display = "none";
}
function openDetails4() {
  document.getElementById("portfolio-details4").style.display = "block";
}
function closeDetails4() {
  document.getElementById("portfolio-details4").style.display = "none";
}

function openModal5() {
  document.getElementById("myModal5").style.display = "block";
}
function closeModal5() {
  document.getElementById("myModal5").style.display = "none";
}
function openDetails5() {
  document.getElementById("portfolio-details5").style.display = "block";
}
function closeDetails5() {
  document.getElementById("portfolio-details5").style.display = "none";
}

function openModal6() {
  document.getElementById("myModal6").style.display = "block";
}
function closeModal6() {
  document.getElementById("myModal6").style.display = "none";
}
function openDetails6() {
  document.getElementById("portfolio-details6").style.display = "block";
}
function closeDetails6() {
  document.getElementById("portfolio-details6").style.display = "none";
}

function openModal7() {
  document.getElementById("myModal7").style.display = "block";
}
function closeModal7() {
  document.getElementById("myModal7").style.display = "none";
}
function openDetails7() {
  document.getElementById("portfolio-details7").style.display = "block";
}
function closeDetails7() {
  document.getElementById("portfolio-details7").style.display = "none";
}

function openModal8() {
  document.getElementById("myModal8").style.display = "block";
}
function closeModal8() {
  document.getElementById("myModal8").style.display = "none";
}
function openDetails8() {
  document.getElementById("portfolio-details8").style.display = "block";
}
function closeDetails8() {
  document.getElementById("portfolio-details8").style.display = "none";
}

function openModal9() {
  document.getElementById("myModal9").style.display = "block";
}
function closeModal9() {
  document.getElementById("myModal9").style.display = "none";
}
function openDetails9() {
  document.getElementById("portfolio-details9").style.display = "block";
}
function closeDetails9() {
  document.getElementById("portfolio-details9").style.display = "none";
}



function sendEmail(){
  Email.send({
    SecureToken : "acfa8ef4-0d1d-4fd8-a6ab-bea6c8c17936",
    Username : "elizabethnwaugo@gmail.com",
    Password : "xqjgywnwpyyaeclc",
    To : 'nwaugochimuanya@gmail.com',
    From : document.getElementById("email").value,
    Subject : "This is the subject",
    Body : "And this is the body"
  }).then(function (message){
    alert("Message sent successfully")
  });
}
