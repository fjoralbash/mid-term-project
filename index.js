
// This it the section for the scroll up button 

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




// Contact subscribe

function subscribe(event) {
  event.preventDefault();
  const email = document.querySelector("#home-section .home-section__mail-input").value;

  if (email.includes("@") && email.includes(".")) {
    document
      .querySelector("#home-section .submitted-message")
      .classList.add("succeed", "show-and-hide");
    document.querySelector("#home-section .submitted-message p").innerHTML =
      "Thank you! Your submission has been received!";
  } else {
    document
      .querySelector("#home-section .submitted-message")
      .classList.add("fail", "show-and-hide");
    document.querySelector("#home-section .submitted-message p").innerHTML =
      "Oops! Something went wrong while submitting the form!";
  }

  document.querySelector("#home-section .submitted-message").value = "";
  setTimeout(() => {
    document
      .querySelector("#home-section .submitted-message p")
      .classList.remove("show-and-hide", "succeed", "fail");
  }, 5000);
}




