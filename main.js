const uiScript = {
  scrollToTarieven: function (tar) {
    let e = document.getElementById(tar);
    e.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start',
      duration: '2009'
    });
  },
}


let navButton = document.querySelector('#navButtonExpand')

navButton.addEventListener('click', function () {
  let navMenu = document.getElementById('navMenu--mobile')
  console.log('click')

  if (navMenu.style.display === "flex") {
    navMenu.style.display = "none";
    navButton.className = "fas fa-bars"
    navButton.style.color = "inherit"
  } else {
    navMenu.style.display = "flex";
    navButton.className = "fas fa-times"
    navButton.style.color = "#4F4F4F"
  }
})