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
}