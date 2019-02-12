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
                        <td>
                        ${item.id}
                        <br>
                            <a 
                            class="btn btn-success viewModalSelected" 
                            data-id="${item.id}"
                            data-toggle="modal"
                            data-target="#myViewModal"
                            >View</a></td>
                        <td>${item.name}</td>
                        <td><img src="${item.imgDrink}" alt="${item.name}" class="img-fluid" width="80px" height="80px" style="text-align:center;"></td>
                        <td><a class="btn btn-danger removeModalSelected" data-id="${item.id}">Remove</a></td>
                    </tr>
                `;

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

    async function GetSelectedModalById(id) {
        let url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
        let response = await fetch(url);

        let data = await response.json();

        return {
            data
        }
    }

    function injectdatainModal(IngreMeasureArray) {
        let temp = ``;
        IngreMeasureArray.forEach(oneset => {
            temp += `
                <h4>${oneset.ingredient} - ${oneset.measure}</h4>
            `;
        });

        return temp;
    }

    function setIngredientsTemplate(data) {

        let ingredientsArray = [];
        for (let i = 1; i < 16; i++) {
            const obj = {};
            if (data[`strIngredient${i}`] !== '') {
                obj.ingredient = data[`strIngredient${i}`];
                obj.measure = data[`strMeasure${i}`];
                ingredientsArray.push(obj);
            }
        }
        return injectdatainModal(ingredientsArray);
    }

    function viewSelectedModal() {
        let viewHeader = document.getElementById('viewHeader');
        let viewBody = document.getElementById('viewBody');
        let drink;
        let createdTemplate;
        document.getElementById('tablegroup').addEventListener('click', (e) => {

            if (e.target.classList.contains('viewModalSelected')) {
                const id = e.target.getAttribute('data-id');
                let card = GetSelectedModalById(id);

                card
                    .then(
                        (Item) => {
                            drink = Item.data.drinks[0];

                            viewHeader.innerHTML = `
                                        <div>
                                            <img src="${drink.strDrinkThumb}"
                                            alt="${drink.strDrink}" 
                                            class="img-fluid" width="100%" height="400px" 
                                            style="text-align:center;">
                                        </div>
                            `;
                            createdTemplate = setIngredientsTemplate(drink);

                            document.getElementById('ingremeasure').innerHTML = createdTemplate;

                            document.getElementById('instructions').innerHTML = drink.strInstructions;

                            document.getElementById('drinkName').innerHTML = drink.strDrink;

                        }
                    )
            }
        })
    }

    viewSelectedModal();


    function removeModalLocalStorage(id) {

        let list = getDrinksFromStorage();

        list.forEach(
            (listItem, index) => {
                if (listItem.id === id) {
                    list.splice(index, 1);
                    localStorage.setItem('drinks', JSON.stringify(list));
                }
            }
        )

    }

    function removeSelectedModal() {

        document.getElementById('tablegroup').addEventListener('click', (e) => {


            if (e.target.classList.contains('removeModalSelected')) {
                // console.log(e.target.dataset.id);
                e.target.parentElement.parentElement.remove();
                removeModalLocalStorage(e.target.dataset.id);
            }
        })
    }

    removeSelectedModal();

}