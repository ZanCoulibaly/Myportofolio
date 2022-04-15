function sendEmail() {
    sendEmail.send({
        Host: "smtp.gmail.com",
        Username: "balamine129@gmail.com",
        Password: "gkivqwlavmlpjvsl",
        To: "balamine129@gmail.com",
        From: document.getElementById("email").value,
        Subject: "My portofolio",
        Boby: "Nom: " + document.getElementById("nom").value +
            "<br> Email: " + document.getElementById("email").value +
            "<br> Subject: " + document.getElementById("subject").value +
            "<br> Message: " + document.getElementById("message").value
    }).then(
        message => alert("Message envoyer avec succes")
    )
}