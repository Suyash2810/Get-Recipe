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
        const panel = document.getElementById('panel');
        var SelectedList = list;
        var template = `<br>`;

        SelectedList.forEach(
            (item) => {
                if (item !== null) {
                    template += `
                    <tr style="color:white;">
                        <td>${item.id}</td>
                        <td>${item.name}</td>
                        <td><img src="${item.imgDrink}" alt="${item.name}" class="img-fluid" width="80px" height="80px" style="text-align:center;"></td>
                        <td><a class="btn btn-danger" data-id="${item.id}">Remove</a></td>
                    </tr>
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