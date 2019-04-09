function getImage() {
    console.log('Image recived..');
    console.log('processing');
    splitImage(function(pixels) {
        magnifyPixel(function(cb) {
            cb(pixels + 2);
        });
    });
    Enhancement();
}

function splitImage(cb) {

    setTimeout(function() {
        console.log('spliting Image');
        console.log('spliting Done');
        cb(250);
    }, 2000);
}

function magnifyPixel(pixelfn) {
    console.log('magnify Pixel');
    pixelfn(function(pixel) {
        console.log(pixel);

    });

}

function Enhancement() {
    console.log('Enhancing Image');
}

getImage();