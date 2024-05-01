const scriptURL = 'https://script.google.com/macros/s/AKfycbyYNGgOJGPqF9DuNAjtO1byvj_2WyPMbO_V-kAQkAA9bFqpgDUiNvEmwDZOb_i_MNF90g/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault();

  // Run validation function before submitting the form
  if (validate()) {
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        if (response.ok) {
          // alert("Thanks for your feedback! 😊");
          msg.innerHTML = "Thanks for your feedback! 😊";
          setTimeout(function(){
            msg.innerHTML = "";
          },2000)
          form.reset();
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .catch(error => console.error('Error!', error.message));
  }
});

function validate() {
var nam = document.getElementById("name").value;

  var email = document.getElementById("email").value;
  var emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
  
  var yer = document.getElementById("year").value;
  var dep = document.getElementById("dept").value;
  var cls = document.getElementById("class").value;

  var mgf = document.getElementById("msgage").value;

  if (nam ==="") {
    alert("Enter Your Name");
    return false;
  }
  else if (!emailregex.test(email)) {
    alert("Email is Error.");
    return false;
  }   
  else if (yer === "Select The Year") {
    alert("Please select The Year.");
    return false;
  }
  else if (dep === "Select Your Department") {
    alert("Please select your department.");
    return false;
  } else if (cls === "Select Your Section") {
    alert("Please select your section.");
    return false;
  }
  else if (mgf === "") {
    alert("Please Fill The message");
    return false;
  } 

  return true; // If all validations pass
}
