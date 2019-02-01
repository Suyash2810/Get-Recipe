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
}