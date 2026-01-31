let form = document.getElementById('form');
let email = document.getElementById('email');
let error = document.getElementById('error');


form.addEventListener('submit', function(event) {
    event.preventDefault();
    let messages = [];

   if (email.value.trim === ''){
        messages.push('Email is required');
   }
   if (!email.value.includes("@")){
        messages.push('Email must be a valid email address');
   }
    if (messages.length > 0){
        error.textContent = messages.join(', ');
    } else {
        error.textContent = "email sent successfully";
    }
})
