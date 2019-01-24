//Creation of the classes


//Defining all the event listeners

function EventListeners() {

    const form = document.querySelector('#form_select');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let text = document.getElementById('input_data').value;


        });
    }
}


EventListeners();