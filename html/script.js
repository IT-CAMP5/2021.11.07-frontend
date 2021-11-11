function jakasFunkcja() {
	var elementZHTMLa = document.getElementById("moj-div");
	var p = document.createElement("p");
	var textNode = document.createTextNode("Tutaj jakis tekst");
	
	p.appendChild(textNode);
	elementZHTMLa.appendChild(p);
	
	elementZHTMLa.style.background = "#00FF00";
	
	f();
}

function f() {
}

function f2() {
}