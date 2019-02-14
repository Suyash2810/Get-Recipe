class Storage {

    setDrinkToStorage(drink) {
        let drinksList = this.getDrinksFromStorage();

        drinksList.push(drink);

        localStorage.setItem('drinks', JSON.stringify(drinksList));
    }

    getDrinksFromStorage() {
        let drinksList;

        if (localStorage.getItem('drinks') === null) {
            drinksList = [];
        } else {
            drinksList = JSON.parse(localStorage.getItem('drinks'));
        }
        return drinksList;
    }

    removeItemFromLocalStorage(id) {
        let list = this.getDrinksFromStorage();

        list.forEach(
            (item, index) => {

                if (item.id === id) {
                    list.splice(index, 1);
                }
            });

        localStorage.setItem('drinks', JSON.stringify(list));
    }
}