window.onload = function () {


    function adjust_image_carousel() {
        let slide_image = document.querySelectorAll('.item');
        let height = window.innerHeight - window.innerHeight / 12 + 'px';
        slide_image.forEach((image) => {
            console.log(image);
            image.setAttribute('style', `height: ${height};`);
        });
    }

    adjust_image_carousel();


}