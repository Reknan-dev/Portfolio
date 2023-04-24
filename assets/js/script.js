function SendMail() {
  var params = {
    from_name : document.getElementById("name").value,
    email_id : document.getElementById("email").value,
    message : document.getElementById("message").value,
  }
  emailjs.send("service_umfncfb", "template_wltyylm", params)
    .then(function (res) {
    alert("Messaggio inviato correttamente!" + res.status);
  }).catch(e => alert(e.message))

}

const button = document.getElementById("sendMail")
button.addEventListener('click', function(event) {
  event.preventDefault()
  SendMail()
})

