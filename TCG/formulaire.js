var button = document.getElementById ('button');

var body = document.getElementById ('body');

button.addEventListener('click', function(){
    body.classList.toggle('darkmode')
});


let form = document.querySelector('#form')

let email = document.querySelector('#email')

let pseudo = document.querySelector('#pseudo')

let password1 = document.querySelector('#password')

let password2 = document.querySelector('#password2')

let passwords = [password1, password2]

let passCheck = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*., ?]).+$")


form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Envoie du form detecte!')


    if(pseudo.value.length < 6 ) {

        
        pseudo.classList.add('invalid')
    } else {
        pseudo.classList.remove('invalid')
        pseudo.classList.add('success')
    };

    if(email.value == '') {
        email.classList.add('invalid')
    } else {
        email.classList.remove('invalid')
        email.classList.add('success')
    };

    if(password1!==password2) {
        password1.classList.add('invalid')
        password2.classList.add('invalid')
    } else {
        password1.classList.remove('invalid')
        password1.classList.add('sucess')
        password2.classList.remove('invalid')
        password2.classList.add('sucess')
    }

    if(passwords.value.length < 8 || passCheck.test(passwords[0,1].value) === false) {
        password1.classList.add('invalid')
        password2.classList.add('invalid')
    } else {
        password1.classList.remove('invalid')
        password1.classList.add('sucess')
        password2.classList.remove('invalid')
        password2.classList.add('sucess')
     };

});
