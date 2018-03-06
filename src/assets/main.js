let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if ( answer.value == '' || attempt.value == '' ) {
        setHiddenFields();
    }

    if ( !validateInput(input.value) ) {
        return false;
    } else {
        attempt.value++;
    }
}

//implement new functions here

function setHiddenFields() {
    answer.value = Math.floor(Math.random() * 9999).toString();
    while ( answer.value.length < 4 ) {
        answer.value = '0' + answer.value;
    }
    attempt.value = 0;
}

function setMessage(message) {
    document.getElementById('message').innerHTML = message;
}

function validateInput(input) {
    if ( input.length !== 4 ) {
        setMessage('Guesses must be exactly 4 characters long.');
        return false;
    }
    return true;
}