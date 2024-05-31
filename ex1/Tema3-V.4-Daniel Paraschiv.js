document.addEventListener("DOMContentLoaded", () => {
       //it worked only after i initialized both form and button and after i changed the button type from submit to click.
       const form = document.getElementById("contact-form");
       const button = document.getElementById("button");

  button.addEventListener("click", (e) => {
       e.preventDefault();
       const formData = new FormData(form);
       alert("Un email la adresa myemail@gmail.com a fost trimis. Va multumesc !");

       // print into the console the form information  
       console.log("This is the information extracted from the user-form: ")
       const nume = formData.get("nume"); console.log(`Nume: ${nume}`);
       const email = formData.get("email"); console.log(`Email: ${email}`);
       const text = formData.get("text"); console.log(`Mesaj: ${text}`);

       // empty the input cell boxes after the information was printed on the console
       const inputs = form.querySelectorAll('input');
       inputs.forEach(input => input.value = '');
       const textarea = form.querySelectorAll('textarea');
       textarea.forEach(textarea=> textarea.value = '');
  });
});

// The only error is that i need to press twice the ok button from the alarm message, for the message to dissapear.
// I thnk the problem is that the form is being submitted twice - once when the button is clicked, and once when the alert message is dismissed.
// To prevent this, you can add an event listener to the form's submit event and call the preventDefault() method to prevent the default form submission behavior.
// The prevent method : e.preventdefault() didn`t worked !