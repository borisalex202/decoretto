function initMap() {
    var myLatlng = new google.maps.LatLng(55.639325,37.840329);

    var mapOptions = {
        zoom: 12,
        center: myLatlng,
        scrollwheel: false,
        mapTypeControl: false
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: 'img/marker.png',
        title: 'Decoretto',
        zIndex: 1
    });

}

window.onload = function () {
    initMap();
};