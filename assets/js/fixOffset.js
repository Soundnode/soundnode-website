function fixOffset() {
  setTimeout(function() {
    scrollBy(0, -51)
  }, 5)
}

document.getElementsByClassName('navbar-brand')[0].addEventListener('click', fixOffset)
document.getElementsByClassName('featuredon')[0].addEventListener('click', fixOffset)
