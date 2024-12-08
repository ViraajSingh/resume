function change(){
    var image = document.getElementById('placeholder');
    image.src = 'https://themindfulaimanifesto.org/wp-content/uploads/2020/09/male-placeholder-image.jpeg';
    console.log("Hello World")
}

function content(){
    var contact = document.getElementById("contact");
    if (contact.style.display === "none") {
        contact.style.display = "block"; 
      }
}