
document.getElementById("submitButton").addEventListener("click", function() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    
    if (name.trim() === "") {
        alert("Le champ du nom est requis.");
        return; 
    }
    if (message.trim() === "") {
        alert("Le champ du message est requis.");
        return;
    }
    alert("Votre message a ete envoye avec succes !");
    
  
    document.getElementById("name").value = "";
    document.getElementById("message").value = "";
}
);
