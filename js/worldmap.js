var x = document.getElementById("welcome-page-inside-box");
var y = document.getElementById("back-btn");
var z = document.getElementById("seccond-content");

function hidebox(){
	if (x.style.display !== "none") {
		x.style.display = "none";
		y.style.display = "block";
		z.style.display = "block";
	}
}

function showbox(){
	if (y.style.display !== "none") {
		y.style.display = "none";
		x.style.display = "block";
		z.style.display = "none";
	}
}