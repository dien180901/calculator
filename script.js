let number = "0";
let ans = 0;
let is_first = true;
let operator = "";
let is_click_operator = false;
let operators_id = {
	"+": "#btn-plus",
	"/": "#btn-div",
	"-": "#btn-dec",
	"*": "#btn-mul",
};
let operators_id_conver = {
	"#btn-plus": "+",
	"#btn-div": "/",
	"#btn-dec": "-",
	"#btn-mul": "*",
};

rerender();
$("#btn-0").click(() => {
	number += "0";
	rerender();
	is_click_operator = false;
	if (operator) {
		remove_disabled_button(operators_id[operator]);
	}
});
$("#btn-1").click(() => {
	number += "1";
	rerender();
	is_click_operator = false;
	if (operator) {
		remove_disabled_button(operators_id[operator]);
	}
});
$("#btn-2").click(() => {
	number += "2";
	rerender();
	is_click_operator = false;
	if (operator) {
		remove_disabled_button(operators_id[operator]);
	}
});
$("#btn-3").click(() => {
	number += "3";
	rerender();
	is_click_operator = false;
	if (operator) {
		remove_disabled_button(operators_id[operator]);
	}
});
$("#btn-4").click(() => {
	number += "4";
	rerender();
	is_click_operator = false;
	if (operator) {
		remove_disabled_button(operators_id[operator]);
	}
});
$("#btn-5").click(() => {
	number += "5";
	rerender();
	is_click_operator = false;
	if (operator) {
		remove_disabled_button(operators_id[operator]);
	}
});
$("#btn-6").click(() => {
	number += "6";
	rerender();
	is_click_operator = false;
	if (operator) {
		remove_disabled_button(operators_id[operator]);
	}
});
$("#btn-7").click(() => {
	number += "7";
	rerender();

	remove_disabled_button(operator);
});
$("#btn-8").click(() => {
	number += "8";
	rerender();
	is_click_operator = false;
	if (operator) {
		remove_disabled_button(operators_id[operator]);
	}
});
$("#btn-9").click(() => {
	number += "9";
	rerender();
	is_click_operator = false;
	if (operator) {
		remove_disabled_button(operators_id[operator]);
	}
});
$("#btn-point").click(() => {
	if (number.indexOf(".") == -1) {
		number += ".";

	}

	rerender();
});
$("#btn-ac").click(() => {
	number = "0";
	ans = parseFloat(number);

	rerender();
	is_click_operator = false;
	if (operator) {
		remove_disabled_button(operators_id[operator]);
	}
});
function disabled_button(except_operator) {
	temp_operators = new Set([...Object.values(operators_id)]);
  
	temp_operators.delete(except_operator);

	$(except_operator).addClass("hover-button-click ");
	for (let i of temp_operators) {
		$(i).prop("disabled", true);
		$(i).removeClass("hover-button");
	}
}
function remove_disabled_button(exception_operator) {
	
	temp_operators = new Set([...Object.values(operators_id)]);
	temp_operators.delete(exception_operator);
	$(exception_operator).removeClass("hover-button-click ");
	$(exception_operator).prop("disabled", false);
	for (let i of temp_operators) {
		$(i).prop("disabled", false);
		$(i).addClass("hover-button");
	}
}
$("#btn-plus").click(() => {
	if (!is_click_operator) {
		if (operator) {
			
			cal(operator);

			number = "0";
		} else {
			ans = parseFloat(number);
			temp = ans;
			number = "0";
			rerender();
		}
		operator = "+";
		is_click_operator = true;
		disabled_button(operators_id["+"]);
	} else {
		if (operator == "+") {
      temp=ans
      number=ans.toString()
			is_click_operator = false;
			operator = "";
			remove_disabled_button(operators_id["+"]);
		}
	}
});
$("#btn-dec").click(() => {
	if (!is_click_operator) {
		if (operator) {
			cal(operator);

			number = "0";
		} else {
			ans = parseFloat(number);
			temp = ans;
			number = "0";
			rerender();
		}
		operator = "-";
		is_click_operator = true;
		disabled_button(operators_id["-"]);
	} else {
    
		if (operator == "-") {
      temp=ans
      number=ans.toString()
			is_click_operator = false;
			operator = "";
			remove_disabled_button(operators_id["-"]);
		}
	}
});
$("#btn-div").click(() => {
  console.log("number div",number)
	if (!is_click_operator) {
		if (operator) {
			cal(operator);

			number = "0";
		} else {
			ans = parseFloat(number);
			temp = ans;
			number = "0";
			rerender();
		}
		operator = "/";
		is_click_operator = true;
		disabled_button(operators_id["/"]);
	} else {
    
    
		if (operator == "/") {
      temp=ans
    number=ans.toString()
			is_click_operator = false;
			operator = "";
			remove_disabled_button(operators_id["/"]);
		}
	}
});
$("#btn-mul").click(() => {
	if (!is_click_operator) {
		if (operator) {
			cal(operator);

			number = "0";
		} else {
			ans = parseFloat(number);
			temp = ans;
			number = "0";
			rerender();
		}
		operator = "*";
		is_click_operator = true;
		disabled_button(operators_id["*"]);
	} else {
		remove_disabled_button(operators_id["*"]);
		if (operator == "*") {
      temp=ans
    number=ans.toString()
			is_click_operator = false;
			operator = "";
			remove_disabled_button(operators_id["*"]);
		}
	}
});
$("#btn-del").click(() => {
  console.log("a",number)
	if (number != "0") {
		number = number.slice(0, -1);
		rerender();
		remove_disabled_button(operator);
	}else if (number==""){
    number="0"
  }
});
$("#btn-equal").click(() => {
	cal(operator);
  
	operator = "";
});
function cal(s) {
	if (s == "+") {
		ans = ans + parseFloat(number);
	} else if (s == "-") {
		ans = ans - parseFloat(number);
	} else if (s == "*") {
		ans = ans * parseFloat(number);
	} else {
		ans = ans / parseFloat(number);
	}
	number = ans.toString();

	ans = parseFloat(ans);
	

	rerender();
}

function rerender() {
	
	while (number[0] == "0" && number.length > 1) {
		number = number.substring(1);
	}
	temp = parseFloat(number);
	temp.toString();
	document.getElementById("output").innerText = temp;
}

