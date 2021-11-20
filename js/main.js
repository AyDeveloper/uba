// initializing jquery
// $(document).ready( function () {
// })

// displaying date on footer
const now = new Date()
const year = now.getFullYear();

const dateYear = document.querySelector('.copyright span i');
dateYear.innerText = `${year}`;



// scroll reveal 
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration:  400,
    easing: 'ease-in',
    reset: true
});

sr.reveal(`.heroInfo, .footer`, {
    interval: 200
})

// form testing 
const form = document.querySelector('.the-form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const name = form.email;
    const nameValue = form.email.value;
    const password = form.password;
    const passwordValue = form.password.value;

    // console.log(name, password);
    if(nameValue.length && passwordValue.length){
        console.log('yes', nameValue, passwordValue);
        window.location.href = "./login.html";
    } else if (nameValue.length || passwordValue.length){
            if(!nameValue.length) {
                alert('Fill in your Username')
            } else if(!passwordValue.length) {
                alert('Fill in your Password')
            }
    }   else {
        alert('Fill in your details')
    }  


})

