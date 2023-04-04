function SendMail() {
  var params = {
    from_name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    message : document.getElementById("message").value
  }
  emailjs.send("service_csnm5mw", "template_wltyylm", params).then(function (res) {
    alert("Success! " + res.status);

  })

}