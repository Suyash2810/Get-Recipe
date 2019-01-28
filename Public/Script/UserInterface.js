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
                template = `<div class="row">
                    ${template}
                </div>`;

                result.insertAdjacentHTML('afterend', template);
                console.log(template);
                template = ``;
                count = 0;
            } else {
                if (count < 2) {
                    template += `
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="column" ontouchstart="this.classList.toggle('hover');">
                                        <div id="card_container">
                                            <div class="front" style="background-image: url(https://unsplash.it/500/500/)">
                                                <div class="inner">
                                                    <p>Diligord</p>
                                                    <span>Lorem ipsum</span>
                                                </div>
                                            </div>
                                            <div class="back">
                                                <div class="inner">
                                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing
                                                        elit. Alias cum
                                                        repellat
                                                        velit quae suscipit c.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    `;

                    count++;
                }
            }
        });
    }
}