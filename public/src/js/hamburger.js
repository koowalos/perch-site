function myFunction() {
  var x = document.getElementById("myNav");
  if (x.className === "header-content-navbar") {
    x.className += " responsive";
  } else {
    x.className = "header-content-navbar";
  }
}
