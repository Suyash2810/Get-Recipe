//Creation of the classes
const ui = new UserInterface();

//Defining all the event listeners

function EventListeners() {

    const form = document.querySelector('#form_select');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let text = document.getElementById('input_data').value;
            let format = "!~@#$%^&*()_-+>?<{}[]";
            for (ch of text) {
                if (format.indexOf(ch) !== -1) {
                    //Condition when a special character has been found as an input for name.
                    //In such case an error message would be displayed using a method of an instance of ui.
                    let message = "Not a valid name. Do not use special characters.";
                    ui.printErrorMessage(message);

                } else {
                    console.log("valid");
                }
            }

        });
    }
}


EventListeners();