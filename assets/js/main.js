var map = L.map('map', {
    center: [0, 0],
    zoom: 13,
    layers: [
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        })
    ],
    zoomControl:false
});


var userMarker;
var userMarker2;
var eggR;
var circle;
const chestIcon = L.icon({
    iconUrl: 'https://pngimg.com/d/treasure_chest_PNG94.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

const userIcon = L.icon({
    iconUrl: 'https://media0.giphy.com/media/SsrTQfLYCpcePgAU3b/giphy.gif?cid=6c09b952xyr0iv6r3kfo01qgf95gtcvl1j1uzk9r63r88wth&ep=v1_stickers_related&rid=giphy.gif&ct=s',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});
const egg = L.icon({
    iconUrl: 'https://freepngimg.com/thumb/egg/87464-egg-royale-games-fortnite-battle-epic-easter.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  
});

const citgo = L.icon({
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Citgo_logo.svg/951px-Citgo_logo.svg.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    
});
const redSoxs = L.icon({
    iconUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/RedSoxPrimary_HangingSocks.svg/1200px-RedSoxPrimary_HangingSocks.svg.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    
});
const ship = L.icon({
    iconUrl: 'https://pngimg.com/d/ship_PNG5403.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    
});
const one = L.icon({
    iconUrl: 'https://clipart-library.com/img1/936576.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    
});

const two = L.icon({
    iconUrl: 'https://brookersicecream.com/wp-content/uploads/2018/08/Paul-Revere.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    
});
const three = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/6887/6887040.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    
});
const four = L.icon({
    iconUrl: 'https://media.istockphoto.com/id/157531255/photo/grungy-betsy-ross-flag-with-thirteen-stars-and-stripes.jpg?s=612x612&w=0&k=20&c=-Z203D84hHgP051pQOlSgQsQ_WGuP4k835VVl22IqEg=',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    
});
const five = L.icon({
    iconUrl: 'https://pngimg.com/d/teat_bag_PNG15.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    
});
const six = L.icon({
    iconUrl: 'https://pngimg.com/d/treasure_chest_PNG94.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    
});
const seven = L.icon({
    iconUrl: 'https://pngimg.com/d/treasure_chest_PNG94.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    
});
const eigth = L.icon({
    iconUrl: 'https://pngimg.com/d/treasure_chest_PNG94.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    
});
const nine = L.icon({
    iconUrl: 'https://pngimg.com/d/treasure_chest_PNG94.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    
});
const ten = L.icon({
    iconUrl: 'https://pngimg.com/d/treasure_chest_PNG94.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    
});
const eleven = L.icon({
    iconUrl: 'https://pngimg.com/d/treasure_chest_PNG94.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    
});
const twelveWent = L.icon({
    iconUrl: 'https://image-tc.galaxy.tf/wipng-6tfie5nt58nx3ut9um5ml4ppk/wentworth.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    
});
function getLocation() {
    if (navigator.permissions) {
        navigator.permissions.query({ name: 'geolocation' }).then(function (permissionStatus) {
            if (permissionStatus.state === 'granted') {
                // Permission has already been granted
                navigator.geolocation.watchPosition(showPosition, handleLocationError);
            } else if (permissionStatus.state === 'prompt') {
                // Permission has not been granted yet; request it
                navigator.geolocation.watchPosition(showPosition, handleLocationError);
            } else {
                // Permission denied
                document.getElementById("location").innerHTML = "Geolocation permission denied.";
            }
        });
    } else if (navigator.geolocation) {
        // Fallback for browsers that do not support the Permissions API
        navigator.geolocation.watchPosition(showPosition, handleLocationError);
    } else {
        document.getElementById("location").innerHTML = "Geolocation is not supported by this browser.";
    }
    console.log("works!")
}


function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    map.setView([latitude, longitude], 1000);

    if (userMarker) {
        map.removeLayer(userMarker);
    }

    userMarker = L.marker([latitude, longitude], { icon: userIcon }).addTo(map);

    userMarker.bindPopup("This is you").openPopup();
    console.log('positon Works')
}
   

    userMarker2 = L.marker([42.3361039, -71.094635], { icon: chestIcon }).addTo(map);

    eggR = L.marker([42.3360885, -71.0954584,21], { icon: egg }).addTo(map);
    citgoSign = L.marker([42.3492582, -71.0962487], { icon: citgo }).addTo(map);
    redSox = L.marker([42.346268, -71.095764], { icon: redSoxs }).addTo(map);
    bostonTea = L.marker([42.3522, -71.0513], { icon: ship }).addTo(map);
    wentworthOne = L.marker([42.3364348, -71.0952346,21], { icon: one }).addTo(map);
    wentworthTwo = L.marker([42.3368404, -71.0956942,20], { icon: two}).addTo(map);
    wentworthThree = L.marker([42.3363249, -71.0966343,18], { icon: three }).addTo(map);
    wentworthFour = L.marker([42.3368235, -71.0942226,21], { icon: four }).addTo(map);
    wentworthFiver = L.marker([42.3366479, -71.0949202,21], { icon: five }).addTo(map);
    cityHall = L.marker([42.3602, -71.0588], { icon: six }).addTo(map);
    paulRevereH = L.marker([42.3634, -71.0537], { icon: seven }).addTo(map);
    northEnd = L.marker([42.3680, -71.0551], { icon: eigth }).addTo(map);
    unionOysterH = L.marker([ 42.3614,  -71.0566], { icon: nine }).addTo(map);
    maassStateH = L.marker([  42.3595,  -71.0621], { icon: ten }).addTo(map);
    wentwothRandom = L.marker([ 42.3363878,  -71.0953774,21], { icon: eleven }).addTo(map);
    wentwothLogo = L.marker([42.336611, -71.095019], { icon: eleven }).addTo(map);


function handleLocationError(error) {
    document.getElementById("location").innerHTML = "Error: " + error.message;
}

// Get location once without asking multiple times

getLocation()