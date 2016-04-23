function scrollSpy() {
  if (document.getElementById('download').getBoundingClientRect().top <= 51) {
    document.getElementsByClassName('featuredon')[0].parentNode.className = ''
    document.getElementsByClassName('download')[0].parentNode.className = 'active'
  } else if (document.getElementById('featuredon').getBoundingClientRect().top <= 51) {
    document.getElementsByClassName('download')[0].parentNode.className = ''
    document.getElementsByClassName('featuredon')[0].parentNode.className = 'active'
  } else {
    document.getElementsByClassName('download')[0].parentNode.className = ''
    document.getElementsByClassName('featuredon')[0].parentNode.className = ''
  }
}

scrollSpy()
addEventListener('scroll', scrollSpy)
