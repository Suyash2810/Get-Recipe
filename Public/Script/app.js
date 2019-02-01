//Creation of the classes
const ui = new UserInterface();
const fetchapi = new API_Fetch();

//Defining all the event listeners

function EventListeners() {

    const form = document.querySelector('#form_select');
    const IngredientForm = document.querySelector('#ingredient_form');
    const categoryForm = document.getElementById('form_category');
    const form_alcohol = document.getElementById('form_alcohol');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let text = document.getElementById('input_data').value;
            let format = "!~@#$%^&*()_-+>?<{}[]";
            let flag = 0;
            for (ch of text) {
                if (format.indexOf(ch) !== -1) {
                    //Condition when a special character has been found as an input for name.
                    //In such case an error message would be displayed using a method of an instance of ui.
                    let message = "Not a valid name. Do not use special characters.";
                    flag = 1;
                    ui.printErrorMessage(message);
                    break;
                }
            }

            if (flag === 0) {
                console.log("valid");
                fetchapi.getQueryApi(text)
                    .then((data) => {
                        if (data.data.drinks === null) {
                            let message = "No results were found.";
                            ui.printErrorMessage(message);
                        } else {
                            // console.log(data.data.drinks);
                            ui.printResultCards(data.data.drinks);
                        }
                    })
            }


        });
    }

    //For the ingredient page

    if (IngredientForm) {
        IngredientForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let text = document.getElementById('input_data').value;
            let format = "!~@#$%^&*()_-+>?<{}[]";
            let flag = 0;
            for (ch of text) {
                if (format.indexOf(ch) !== -1) {
                    //Condition when a special character has been found as an input for name.
                    //In such case an error message would be displayed using a method of an instance of ui.
                    let message = "Not a valid name. Do not use special characters.";
                    flag = 1;
                    ui.printErrorMessage(message);
                    break;
                }
            }

            if (flag === 0) {
                console.log("valid");
                fetchapi.queryApiByIngredient(text)
                    .then((data) => {
                        if (data.data.drinks === null) {
                            let message = "No results were found.";
                            ui.printErrorMessage(message);
                        } else {
                            // console.log(data.data.drinks);
                            ui.printIngredientCards(data.data.drinks);
                        }
                    })
            }


        });
    }

    if (categoryForm) {
        categoryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let text = document.getElementById('input_data').value;
            let format = "!~@#$%^&*()_-+>?<{}[]";
            let flag = 0;
            for (ch of text) {
                if (format.indexOf(ch) !== -1) {
                    //Condition when a special character has been found as an input for name.
                    //In such case an error message would be displayed using a method of an instance of ui.
                    let message = "Not a valid name. Do not use special characters.";
                    flag = 1;
                    ui.printErrorMessage(message);
                    break;
                }
            }

            if (flag === 0) {
                console.log("valid");
                fetchapi.queryApiByCategory(text)
                    .then((data) => {
                        if (data.data.drinks === null) {
                            let message = "No results were found.";
                            ui.printErrorMessage(message);
                        } else {
                            // console.log(data.data.drinks);
                            ui.printCategoryCards(data.data.drinks);
                        }
                    })
            }


        });
    }

    if (form_alcohol) {
        form_alcohol.addEventListener('submit', (e) => {
            e.preventDefault();
            let text = document.getElementById('input_data').value;
            let format = "!~@#$%^&*()-+>?<{}[]";
            let flag = 0;
            for (ch of text) {
                if (format.indexOf(ch) !== -1) {
                    //Condition when a special character has been found as an input for name.
                    //In such case an error message would be displayed using a method of an instance of ui.
                    let message = "Not a valid name. Do not use special characters.";
                    flag = 1;
                    ui.printErrorMessage(message);
                    break;
                }
            }

            if (flag === 0) {
                console.log("valid");
                fetchapi.queryApiByAlcoholPresence(text)
                    .then((data) => {
                        if (data.data.drinks === null) {
                            let message = "No results were found.";
                            ui.printErrorMessage(message);
                        } else {
                            // console.log(data.data.drinks);
                            ui.printPresenceCards(data.data.drinks);
                        }
                    })
            }


        });
    }
}


EventListeners();