
const btn = document.querySelector('#getStarted');

btn.addEventListener('click', (e) =>{
    e.preventDefault(e);
    console.log('kliknuto');
    let error = document.querySelector('#error');
    error.innerHTML = "" ;
    let input = document.querySelector('#email').value;
    console.log(input);
    validateEmail();
     
});


function validateEmail(input) {
    input = document.querySelector('#email').value;
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if (input.match(validRegex)) {
  
      console.log("Valid email address!");
      const formReset = document.querySelector('form').reset();  
    
    } else {
  
      console.log("Invalid email address!");
      let error = document.querySelector('#error');
      error.innerHTML = "Invalid email address! <br> Please try again!" 
      const formReset = document.querySelector('form').reset();  

    }

  }