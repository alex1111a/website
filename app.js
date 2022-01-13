//Alexander Antkowiak
//Learning JS
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})


// function inputWrite() {
//     var copyText = document.getElementById("myText");
//     /* send email 
//     EX: someone sent the idea */

// }


document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    //get input values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;

    document.querySelector(".contact-form").reset();

    sendEmail(name, email, message);
}
function sendEmail(name, email, message) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "antkowiaka1189@gmail.com",
        Password: "niiujbvbkkoqfrxi",
        To: "alexander.f.antkowiak@gmail.com",
        From: "antkowiaka1189@gmail.com",
        Subject: `${name} sent you a programming idea`,
        Body: `Name 👨‍💼👩‍💼 : ${name} <br/> Email 📧 : ${email} <br/> Message 💡 : ${message}`,
    }).then((message) => alert("Idea sent successfully."))
}




/* Copy to clipboard functions */
function myDiscord() {
    var copyText = document.getElementById("discord");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}
function myGmail() {
    var copyText = document.getElementById("gmail");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}