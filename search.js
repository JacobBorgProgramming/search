function techHide(){
  var x = document.getElementById("tech");
if (x.style.display === "none") {
  document.getElementById("techHide").className = "buttonY_green";
 x.style.display = "block";
} else {
 x.style.display = "none";
 document.getElementById("techHide").className = "buttonY_orange";
}
}
function softwareHide(){
  var x = document.getElementById("softwareHide");
if (x.style.display === "none") {
  document.getElementById("softwareButt").className = "buttonY_green";
 x.style.display = "block";
} else {
 x.style.display = "none";
 document.getElementById("softwareButt").className = "buttonY_orange";
}
}
function googleHide(){
  var x = document.getElementById("googleHide");
if (x.style.display === "none") {
  document.getElementById("googleButt").className = "buttonY_green";
 x.style.display = "block";
} else {
 x.style.display = "none";
 document.getElementById("googleButt").className = "buttonY_orange";
}
}
