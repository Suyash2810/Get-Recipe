window.onload = function () {

    function setBackgroundMastheadHeight() {
        var height = window.innerHeight - window.innerHeight / 10 + 'px';
        var container = document.getElementById('backgroundImage');

        container.setAttribute('style', `height: ${height}`);

    }

    setBackgroundMastheadHeight();
}