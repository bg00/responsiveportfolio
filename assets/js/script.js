$(".isslogo").on("click", function() {
  window.open("https://bg00.github.io/ISS-Tracker/");
});

$(".fwflogo").on("click", function() {
  window.open("https://github.com/bg00/project2");
});

$(".sweapp").on("click", function() {
  window.open("https://young-crag-30640.herokuapp.com/");
});

$(".weatherdashboard").on("click", function() {
  window.open("https://bg00.github.io/weatherdashboard/");
});

$(".notetaker").on("click", function() {
  window.open("https://bg00.github.io/notetaker/");
});

$(".burger").on("click", function() {
  window.open("https://polar-harbor-86212.herokuapp.com");
});

var frmvalidator = new Validator("contactform"); 
frmvalidator.addValidation("name","req","Please provide your name"); 
frmvalidator.addValidation("email","req", "Please provide your email"); 
frmvalidator.addValidation("email","email", "Please enter a valid email address");