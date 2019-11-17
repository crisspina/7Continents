var x = document.getElementById("welcome-page-inside-box");
var y = document.getElementById("back-btn");
var z = document.getElementById("seccond-content");

function hidebox(){
		x.style.display = "none";
		y.style.display = "block";
		z.style.display = "block";
		x.style.opacity = "0";
		y.style.opacity = "1";
		z.style.opacity = "1";
}

function showbox(){
		y.style.display = "none";
		x.style.display = "block";
		z.style.display = "none";
		x.style.opacity = "1";
		y.style.opacity = "0";
		z.style.opacity = "0";

}