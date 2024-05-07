//NAVBAR JS

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 550) {
            document.querySelector('.navbar').classList.add('solid');
            document.querySelector('.back-to-top').classList.add('visible');
        } else {
            document.querySelector('.navbar').classList.remove('solid');
            document.querySelector('.back-to-top').classList.remove('visible');
        }
    });
});

//SCROLL JS

document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('a');

    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();

                var hash = this.hash;

                var targetElement = document.querySelector(hash);
                var targetOffsetTop = targetElement.offsetTop;

                window.scrollTo({
                    top: targetOffsetTop,
                    behavior: 'smooth'
                });

                history.pushState(null, null, hash);
            }
        });
    });
});

