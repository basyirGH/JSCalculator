/**
 * AUTHOR Basyir Zainuddin
 * PROJECT SimpleJSCalculator
 */


var str = ""; 
document.getElementById(".").addEventListener("click", function(){printChar(".")});
document.getElementById("+").addEventListener("click", function(){printChar("+")});
document.getElementById("-").addEventListener("click", function(){printChar("-")});
document.getElementById("x").addEventListener("click", function(){printChar("x")});
document.getElementById("/").addEventListener("click", function(){printChar("/")});
document.getElementById("1").addEventListener("click", function(){printChar("1")});
document.getElementById("2").addEventListener("click", function(){printChar("2")});
document.getElementById("3").addEventListener("click", function(){printChar("3")});
document.getElementById("4").addEventListener("click", function(){printChar("4")});
document.getElementById("5").addEventListener("click", function(){printChar("5")});
document.getElementById("6").addEventListener("click", function(){printChar("6")});
document.getElementById("7").addEventListener("click", function(){printChar("7")});
document.getElementById("8").addEventListener("click", function(){printChar("8")});
document.getElementById("9").addEventListener("click", function(){printChar("9")});
document.getElementById("0").addEventListener("click", function(){printChar("0")});
document.getElementById("clr").addEventListener("click", clear);
document.getElementById("del").addEventListener("click", deleteChar);
document.getElementById("=").addEventListener("click", solve);

function printChar(keyPressed) {
	if (str.length <= 16) {
		str = str.concat(keyPressed);
		document.getElementById("input").innerHTML = str;
	} else {
		str = str.concat("");
		document.getElementById("input").innerHTML = str;
	}
}

function clear() {
	str = "";
	solution = "";
	document.getElementById("input").innerHTML = str;
	document.getElementById("solution").innerHTML = solution;
}

function deleteChar() {
	str = str.substring(0, str.length-1);
	document.getElementById("input").innerHTML = str;
}

function solve() {
	var strOperand1 = "";
	var strOperand2 = "";
	var strOperation = "";
	var operand1 = null;
	var operand2 = null;
	var solution = null;
	while (strOperation == "") {
		if (str.includes("+")) {
			strOperand1 = str.substring(0, str.indexOf("+"));
			strOperand2 = str.substring(str.indexOf("+") + 1, str.length)
			strOperation = "+";
			break;
		} else if (str.includes("-")) {
			strOperand1 = str.substring(0, str.indexOf("-"));
			strOperand2 = str.substring(str.indexOf("-") + 1, str.length)
			strOperation = "-";
			break;
		} else if (str.includes("x")) {
			strOperand1 = str.substring(0, str.indexOf("x"));
			strOperand2 = str.substring(str.indexOf("x") + 1, str.length)
			strOperation = "x";
			break;
		} else if (str.includes("/")) {
			strOperand1 = str.substring(0, str.indexOf("/"));
			strOperand2 = str.substring(str.indexOf("/") + 1, str.length)
			strOperation = "/";
			break;
		}
		else {
			strOperand1 = str;
			break;
		}
	}
	
	if ((strOperand1 + strOperand2).includes(".") ||
			strOperand1.includes(".") ||
				strOperand2.includes(".")) {
					
		operand1 = parseFloat(strOperand1);
		operand2 = parseFloat(strOperand2);
	} else {
		operand1 = parseInt(strOperand1);
		operand2 = parseInt(strOperand2);
	}
	
	if (strOperation != "") {
		switch (strOperation) {
			case "+":
				solution = operand1 + operand2;
				break;
			case "-":
				solution = operand1 - operand2;
				break;
			case "x":
				solution = operand1 * operand2;
				break;
			case "/":
				solution = operand1 / operand2;
				break;
		}
	} else {
		document.getElementById("solution").innerHTML = operand1;
	}
	
	if (solution != null) {
		if (solution.toString().length  <= 16) {
			document.getElementById("solution").innerHTML = solution;
		} else {
			document.getElementById("solution").innerHTML = solution.toFixed(14);
		}
	} else {
		document.getElementById("solution").innerHTML = operand1;
	}

}

let finish = true;