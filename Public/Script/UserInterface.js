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
}