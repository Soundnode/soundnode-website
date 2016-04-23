function toggleNavbar() {
  var navbar = document.getElementsByClassName('navbar-collapse')[0]
  if (navbar.className === 'navbar-collapse collapse') {
    navbar.className = 'navbar-collapse'
  } else {
    navbar.className = 'navbar-collapse collapse'
  }
}

document.getElementsByClassName('navbar-toggle')[0].addEventListener('click', toggleNavbar)
