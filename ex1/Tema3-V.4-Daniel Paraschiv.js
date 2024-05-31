document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const button = document.getElementById("button");
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
       alert("Un email la adresa myemail@gmail.com a fost trimis. Va multumesc !");
       const nume = formData.get("nume"); console.log(`Nume: ${nume}`);
       const email = formData.get("email"); console.log(`Email: ${email}`);
       const text = formData.get("text"); console.log(`Mesaj: ${text}`);
  });
});