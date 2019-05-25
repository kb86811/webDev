
var display = document.getElementById("dispaly");

function cls(dig) {
	display.value = dig;
}

function show(dig) {
	display.value += dig;
}

function clsO() {
	if(display.value == "" || dispaly.value == null) {
		display.value = "";
	} else {
		display.value = display.value.substr(0, display.value.length-1);
	}
}

function sign(dig) {
	if(dig == "" || dig == null){
		display.value = "";
	} else if (dig > 0){
			display.value = "-" + dispaly.value;
	} else {
		dispaly.value = Math.abs(display.value);
	}
}

function point() {
	var dis = display.value;
	if(dis == "" || dis == null) {
		display.value = "0.";
	} else{
		if(dis.indexOf('.') != -1) {
			document.getElementById('point').setAttribute = "disabled";
		} else {
		display.value += ".";
		}
	}
}

function calc() {
	var dis = display.value;
	if (dis == "" || dis == null) {
		document.getElementById("query").setAttribute = "disabled";
	} else {
			 try {
		  display.value = eval(dis);
		} catch (e) {
		  if (e instanceof SyntaxError) 
			display.value ="Syntax Error";
		  }
	}
}