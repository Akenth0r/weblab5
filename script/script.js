
function createElementFromString(str){
	var el = document.createElement("div");
	el.innerHTML = str;
	return el.firstChild;
	
}

function blurListener(){
	var a = document.querySelectorAll("#"+this.value);
	for(var i = 0; i<a.length; i++)
	{
		a[i].addEventListener("click", replace);
	}
}

function replace (){
	var inp1 = document.querySelector("#element");
	var inp2 = document.querySelector("#html_code");
	var els = document.querySelectorAll("#"+inp1.value);
	//console.log("#"+inp1.value);
	for(var i = 0; i<els.length; i++)
	{
		var ch = createElementFromString(inp2.value);
		var par = els[i].parentNode;
		var id = els[i].id
		console.log(this);
		ch.id = inp1.value;
		els[i].removeEventListener("click", replace);
		par.replaceChild(ch, els[i]);
		console.log(par.innerHTML);
	}
}

document.querySelector("#element").addEventListener("blur", blurListener);