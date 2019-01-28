window.onload = function () {


    function adjust_image_carousel() {
        let slide_image = document.querySelectorAll('.item');
        let height = window.innerHeight - window.innerHeight / 12 + 'px';
        slide_image.forEach((image) => {
            image.setAttribute('style', `height: ${height};`);
        });
    }

    adjust_image_carousel();

    function faviconChanger() {
        let array = [
            './images/pexels-photo-434298.jpeg',
            './images/after-work-drink-alcohol-summer-162571.jpeg',
            './images/pexels-photo-461427.jpeg',
            './images/pexels-photo-1282272.jpeg',
            './images/pexels-photo-1799351.jpeg'
        ];

        var favicon = document.getElementById('faviconImage');
        var faviconIngredient = document.getElementById('faviconImageIngredient');
        var faviconCategory = document.getElementById('faviconImageCategory');
        var faviconAlcohol = document.getElementById('faviconImageAlcohol');
        var counter = 0;


        if (window.location.href.indexOf("index") > -1) {
            setInterval(() => {

                favicon.setAttribute('href', array[counter]);

                counter++;
                if (counter == array.length - 1) {
                    counter = 0;
                }
            }, 1000);
        }

        if (window.location.href.indexOf("ingredient") > -1) {
            setInterval(() => {

                faviconIngredient.setAttribute('href', array[counter]);

                counter++;
                if (counter == array.length - 1) {
                    counter = 0;
                }
            }, 1000);
        }

        if (window.location.href.indexOf("category") > -1) {
            setInterval(() => {

                faviconCategory.setAttribute('href', array[counter]);

                counter++;
                if (counter == array.length - 1) {
                    counter = 0;
                }
            }, 1000);
        }

        if (window.location.href.indexOf("alcohol") > -1) {
            setInterval(() => {

                faviconAlcohol.setAttribute('href', array[counter]);

                counter++;
                if (counter == array.length - 1) {
                    counter = 0;
                }
            }, 1000);
        }

    }

    faviconChanger();
}