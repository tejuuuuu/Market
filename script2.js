
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
var image1 = getParameterByName('image1');
var image2 = getParameterByName('image2');

var imgElement1 = document.createElement('img');
imgElement1.src = image1;
imgElement1.classList.add('random-image'); 

var imgElement2 = document.createElement('img');
imgElement2.src = image2;
imgElement2.classList.add('random-image'); 
var imageContainer = document.getElementById('imageContainer');
imageContainer.appendChild(imgElement1);
imageContainer.appendChild(imgElement2);
