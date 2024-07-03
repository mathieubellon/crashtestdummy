document.addEventListener("DOMContentLoaded", function () {
    var derniere_position_de_scroll_connue = 0;
    var ticking = false;
    var currentLocation = window.location.pathname;

    if (localStorage.getItem(currentLocation) != null) {
        window.scrollTo({
            top: localStorage.getItem(currentLocation),
            left: 0,
        });
    }

    window.addEventListener("scroll", function (e) {
        derniere_position_de_scroll_connue = window.scrollY;
        //console.log(derniere_position_de_scroll_connue);

        if (!ticking) {
            window.requestAnimationFrame(function () {
                localStorage.setItem(
                    currentLocation,
                    derniere_position_de_scroll_connue
                );
                ticking = false;
            });
        }

        ticking = true;
    });

});