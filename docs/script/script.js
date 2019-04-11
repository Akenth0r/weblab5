
function createElementFromString(str){
	var el = document.createElement("div");
	el.innerHTML = str;
	return el.firstChild;
	
}


// function blurListener(){
	// var a = document.querySelectorAll("#"+this.value);
	// for(var i = 0; i<a.length; i++)
	// {
		// a[i].addEventListener("click", replace);
	// }
// }

function replace (event){
    
	var inp1 = document.querySelector("#element");
	var inp2 = document.querySelector("#html_code");
	var els = document.querySelector("#"+inp1.value);
	console.log(event.target);
    if(event.target == els)
    {
        var ch = createElementFromString(inp2.value);
        console.log(ch);
        var par = event.target.parentNode;
        par.replaceChild(ch, event.target);
    }
	
}

document.querySelector("body").addEventListener("click", replace);
