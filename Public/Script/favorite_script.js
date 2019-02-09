window.onload = function () {

    function setBackgroundMastheadHeight() {
        var height = window.innerHeight - window.innerHeight / 10 + 'px';
        var container = document.getElementById('backgroundImage');

        container.setAttribute('style', `height: ${height}`);

    }

    setBackgroundMastheadHeight();

    function getDrinksFromStorage() {
        let drinksList;

        if (localStorage.getItem('drinks') === null) {
            drinksList = [];
        } else {
            drinksList = JSON.parse(localStorage.getItem('drinks'));
        }
        return drinksList;
    }

    function addSelectedDrinksToFavorite(list) {
        const panel = document.getElementById('panelgroup');
        var SelectedList = list;
        var template = `<br>`;

        SelectedList.forEach(
            (item) => {
                if (item !== null) {
                    template += `
                    <div class="panel panel-default" style="background-color:transparent;">
                        <div class="panel-header">
                            <h3 style="font-family: 'Montserrat', sans-serif;font-size:25px;color:white;margin-left:20px;">${item.name}</h3>
                            
                        </div>
                    </div>
                `;
                    console.log(template);
                }
            }
        );

        panel.innerHTML = template;
    }

    function addSelectedDrinksFromStorage() {
        const list = getDrinksFromStorage();
        if (list !== null) {
            addSelectedDrinksToFavorite(list);
        }
    }

    addSelectedDrinksFromStorage();

}