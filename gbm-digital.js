var a = document.getElementById("About-button");
var b = document.getElementById("Services-button");
var c = document.getElementById("Projects-button");
var about = document.getElementById("About");
var services = document.getElementById("Services");
var projects = document.getElementById("Projects");
var contact = document.getElementById("Contact");
var popup = document.getElementById("popup");
var close = document.getElementById("close");
var content = document.getElementsByClassName("content");

close.addEventListener("click", function(){
	var i;
	for (i = 0; i < content.length; i++) {
		if (content[i].style.display = "block") {
			content[i].style.display = "none";
			popup.style.display = "none";
		}
	}
})

a.addEventListener("click", function(){
	if (about.style.display = "none") {
		popup.style.display = "block";
		about.style.display = "block";
	}
})

b.addEventListener("click", function(){
	if (services.style.display = "none") {
		popup.style.display = "block";
		services.style.display = "block";
	}
})
c.addEventListener("click", function(){
	if (projects.style.display = "none") {
		popup.style.display = "block";
		projects.style.display = "block";
	}
})


document.addEventListener("keyup", function(event){
	if (event.keyCode === 27) {
		var i;
		for (i = 0; i < content.length; i++) {
		if (content[i].style.display = "block") {
			content[i].style.display = "none";
			popup.style.display = "none";
			}
		}
	}
})
