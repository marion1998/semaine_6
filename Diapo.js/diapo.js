var images = [];
var time = 3000;

images[0] = '1.jpg';
images[1] = '7.jpg';
images[2] = '6.jpg';

function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}



window.onload = changeImg;

