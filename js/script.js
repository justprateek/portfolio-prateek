$(document).ready(function () {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false,
    });

    const typed = new Typed(".typed", {
        strings: ['SOFTWARE ENGINEER', 'WEB DEVELOPER', 'NIT SILCHAR'],
        typeSpeed: 50,
        startDelay: 500,
        loop: true,
        showCursor: false
        //backDelay: 700,
        // fadeOut: false,
        // fadeOutClass: 'typed-fade-out',
        // fadeOutDelay: 500,

    })

});