;(function(window, undefined) {
    var images = [
        'images/img1.jpg',
        'images/img2.jpg',
        'images/img3.jpg',
        'images/img4.jpg'
    ];

    preloadimages(images).done(function(images){
        var elViews = document.querySelectorAll('.viewState')
            , elContainer = document.querySelector('.container');

        document.getElementById('loader').remove();

        for ( var i = 0; i < elViews.length; i++ ) {
            if ( elViews[i].getAttribute('data-isVisible') === 'true' ) {
                elViews[i].setAttribute('data-isVisible', 'false');
            } else {
                elViews[i].setAttribute('data-isVisible', 'true');
            }
        }

        document.querySelector('.highlight').classList.add('animate');

        // quick solution for background slideshow
        window.setInterval(function() {
            var currentSlide = elContainer.getAttribute('data-currentSlide');

            elContainer.setAttribute('data-isVisible', 'false');

            if ( currentSlide === '1' ) {
                elContainer.setAttribute('style', 'background-image: url(../images/img2.jpg)');
                elContainer.setAttribute('data-currentSlide', '2')
            } else if ( currentSlide === '2' ) {
                elContainer.setAttribute('style', 'background-image: url(../images/img3.jpg)');
                elContainer.setAttribute('data-currentSlide', '3');
            } else if ( currentSlide === '3' ) {
                elContainer.setAttribute('style', 'background-image: url(../images/img4.jpg)');
                elContainer.setAttribute('data-currentSlide', '4');
            } else if ( currentSlide === '4' ) {
                elContainer.setAttribute('style', 'background-image: url(../images/img1.jpg)');
                elContainer.setAttribute('data-currentSlide', '1');
            }

            window.setTimeout(function() {
                elContainer.setAttribute('data-isVisible', 'true');
            }, 2500)


        }, 8000)

    });
})(window);