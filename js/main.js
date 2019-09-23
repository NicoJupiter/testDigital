document.addEventListener('DOMContentLoaded', function () {
    var about = document.querySelector('.about');
    var service = document.querySelector('.service');
    var contact = document.querySelector('.contact');

    about.addEventListener('mouseover', function () {

        if(!about.classList.contains("active"))
        {
            var elems = document.querySelectorAll(".active");
            [].forEach.call(elems, function(el) {
                el.classList.remove("active");
            });
            about.classList.add('active');
        }
    });

    service.addEventListener('mouseover', function () {

        if(!service.classList.contains("active"))
        {
            var elems = document.querySelectorAll(".active");
            [].forEach.call(elems, function(el) {
                el.classList.remove("active");
            });
            service.classList.add('active');
        }
    });

    contact.addEventListener('mouseover', function () {

        if(!contact.classList.contains("active"))
        {
            var elems = document.querySelectorAll(".active");
            [].forEach.call(elems, function(el) {
                el.classList.remove("active");
            });
            contact.classList.add('active');
        }
    })

})
