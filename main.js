function initMap() {
    const loc = { lat: 8.133050, lng: 4.238450 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: loc
    });
    new google.maps.Marker({ position: loc, map: map });
}

// Sticky menu background
window.addEventListener('scroll', function () {
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});


// Smooth Scrolling
$('#navbar a, .btn').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            { scrollTop: $(hash).offset().top - 100 },
            800
        );
    }
});