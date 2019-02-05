class UserInterface {

    printErrorMessage(message) {
        // Method for printing the input error.
        var template = `
        <div class="alert alert-dismissible" id="alert_box">
        <a href="#" class="close" data-dismiss="alert" style="color:white;"><i class="fa fa-times"></i></a>
        <h5 style="color:white;">${message}</h5>
        </div>
        `;
        let container = document.querySelector('#alert_data');
        container.innerHTML = template;

        //After five seconds the alert message will disappear.
        setTimeout(() => {
            container.innerHTML = '';
        }, 5000);
    }

    printResultCards(data) {
        console.log(data);
        var count = 0;
        var template = ``;
        var result = document.getElementById('result_column');
        data.forEach((card) => {

            if (count == 2) {
                count = 0;
                template = `<div class="row">
                    ${template}
                </div>`;

                result.insertAdjacentHTML('afterend', template);
                template = ``;
                console.log(card);
            }
            if (count < 2) {
                template = `
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="column" ontouchstart="this.classList.toggle('hover');">
                                        <div id="card_container">
                                            <div class="front" style="background-image: url(${card.strDrinkThumb});background-size:cover;background-position:center center;">
                                                <div class="inner">
                                                    <p>${card.strDrink}</p>
                                                    <span>${card.strCategory}</span>
                                                </div>
                                            </div>
                                            <div class="back">
                                                <div class="inner">
                                                    <p>${card.strInstructions}</p>
                                                    <br>
                                                    <button type="button" 
                                                    class="btn btn-default dataId"
                                                    id="ingredient_button"
                                                    data-toggle="modal"
                                                    data-target="#ingredient_Data"
                                                    data-idreference="${card.idDrink}"
                                                    >
                                                    <span class="fa fa-arrow-right" id="ingredient_button_icon"></span>
                                                        Ingredients
                                                    </button>
                                                    <br><br>
                                                    <button class="btn btn-default" id="addDrinkStorageBtn" data-id="${card.idDrink}">
                                                        Add &nbsp; <span class="fa fa-plus"></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    ` + template;

                count++;
            }
        });

        template = `<div class="row">
                    ${template}
                </div>`;

        result.insertAdjacentHTML('afterend', template);
    }

    // For printing the results when searched by ingredient
    printIngredientCards(data) {
        console.log(data);

        var count2 = 0;
        var template2 = ``;
        var result2 = document.getElementById('result_column');
        data.forEach((card) => {

            if (count2 == 2) {
                count2 = 0;
                template2 = `<div class="row">
                    ${template2}
                </div>`;

                result2.insertAdjacentHTML('afterend', template2);
                template2 = ``;
                console.log(card);
            }
            if (count2 < 2) {
                template2 = `
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="column" ontouchstart="this.classList.toggle('hover');">
                                        <div id="card_container">
                                            <div class="front" style="background-image: url(${card.strDrinkThumb});background-size:cover;background-position:center center;">
                                                <div class="inner">
                                                    <p>${card.strDrink}</p>
                                                    <span>${card.idDrink}</span>
                                                </div>
                                            </div>
                                            <div class="back">
                                                <div class="inner">
                                                    <p>${card.strInstructions}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    ` + template2;

                count2++;
            }

        });

        template2 = `<div class="row">
                    ${template2}
                </div>`;

        result2.insertAdjacentHTML('afterend', template2);
    }

    printCategoryCards(data) {
        console.log(data);

        var count3 = 0;
        var template3 = ``;
        var result3 = document.getElementById('result_column');
        data.forEach((card) => {

            if (count3 == 2) {
                count3 = 0;
                template3 = `<div class="row">
                    ${template3}
                </div>`;

                result3.insertAdjacentHTML('afterend', template3);
                template3 = ``;
                console.log(card);
            }
            if (count3 < 2) {
                template3 = `
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="column" ontouchstart="this.classList.toggle('hover');">
                                        <div id="card_container">
                                            <div class="front" style="background-image: url(${card.strDrinkThumb});background-size:cover;background-position:center center;">
                                                <div class="inner">
                                                    <p>${card.strDrink}</p>
                                                    <span>${card.idDrink}</span>
                                                </div>
                                            </div>
                                            <div class="back">
                                                <div class="inner">
                                                    <p>${card.strInstructions}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    ` + template3;

                count3++;
            }

        });

        template3 = `<div class="row">
                    ${template3}
                </div>`;

        result3.insertAdjacentHTML('afterend', template3);
    }


    printPresenceCards(data) {
        console.log(data);

        var count4 = 0;
        var template4 = ``;
        var result4 = document.getElementById('result_column');
        data.forEach((card) => {

            if (count4 == 2) {
                count4 = 0;
                template4 = `<div class="row">
                    ${template4}
                </div>`;

                result4.insertAdjacentHTML('afterend', template4);
                template4 = ``;
                console.log(card);
            }
            if (count4 < 2) {
                template4 = `
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="column" ontouchstart="this.classList.toggle('hover');">
                                        <div id="card_container">
                                            <div class="front" style="background-image: url(${card.strDrinkThumb});background-size:cover;background-position:center center;">
                                                <div class="inner">
                                                    <p>${card.strDrink}</p>
                                                    <span>${card.idDrink}</span>
                                                </div>
                                            </div>
                                            <div class="back">
                                                <div class="inner">
                                                    <p>${card.strInstructions}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    ` + template4;

                count4++;
            }

        });

        template4 = `<div class="row">
                    ${template4}
                </div>`;

        result4.insertAdjacentHTML('afterend', template4);
    }

    clearResults() {
        let results = document.getElementById('result_column');
        results.innerHTML = '';
    }
}