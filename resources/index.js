var btnFullScreenMap = document.getElementById('btn-full-screen-map');
var btnScreenMap = document.getElementById('btn-screen-map');
var btnContainer = document.getElementById('btn-container');
var divTitle = document.getElementById('div-title');
var divMapContainer = document.getElementById('div-map-container');
var divWrapper = document.getElementById('div-wrapper');
var subContainer = document.getElementById('sub-container');
var mapDiv = document.getElementById('map');
var fullSize = false;

btnFullScreenMap.addEventListener('click', function() {
    divTitle.classList.toggle('hidden-item');
    subContainer.classList.toggle('hidden-item');
    btnContainer.classList.toggle('hidden-item');
    divMapContainer.classList.toggle('div-map-container-full');
    divWrapper.classList.toggle('div-wrapper-full');
    mapDiv.classList.remove('map');
    mapDiv.classList.toggle('map-full');
    btnFullScreenMap.style.display = 'none';
    btnScreenMap.style.display = 'block';
    fullSize = true;
    resizeMap();
});

btnScreenMap.addEventListener('click', function() {
    divTitle.classList.toggle('hidden-item');
    subContainer.classList.toggle('hidden-item');
    btnContainer.classList.toggle('hidden-item');
    divMapContainer.classList.toggle('div-map-container-full');
    divWrapper.classList.toggle('div-wrapper-full');
    mapDiv.classList.toggle('map-full');
    mapDiv.classList.add('map');
    btnFullScreenMap.style.display = 'block';
    btnScreenMap.style.display = 'none';
    fullSize = false;
    resizeMap();
});

function resizeMap() {
    const width = mapDiv.offsetWidth;
    const height = mapDiv.offsetHeight;

    console.log("width", width)
    console.log("height", height)
    
    map.setSize([width, height]);
    map.getView().fit(map.getView().calculateExtent());
    //change the zoom level
    map.getView().setZoom(12);
}

window.onload = function() {
    document.getElementById("spinner-container").classList.add("hidden");
};