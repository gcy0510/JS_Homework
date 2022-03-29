let rst = 0;
let expression = "";

const num = document.querySelectorAll(".number");
const add = document.querySelector("#add");
const sub = document.querySelector("#sub");
const multi = document.querySelector("#multi");
const division = document.querySelector("#division");
const dot = document.querySelector("#dot");
const ac = document.querySelector("#ac");
const smt  = document.querySelector("#submit");
const txt = document.querySelector("#result");

for (let i = 0; i < num.length; i++){
    num[i].onclick = function () {
        expression += this.textContent;
        txt.textContent += this.textContent;
    }
}

dot.onclick = function () {
    //如果屏幕为空时输入.
    if (expression == "") {
        expression = "0.";
        txt.textContent = "0.";
    }
    else {
        expression += this.textContent;
        txt.textContent += this.textContent;
    }
}

ac.onclick = function () {
    txt.textContent = "";
    expression = "";
    rst = 0;
}

add.onclick = function () {
    expression += " + ";
    txt.textContent += " + ";
}

sub.onclick = function () {
    expression += " - ";
    txt.textContent += " - ";
}

multi.onclick = function () {
    expression += " * ";
    txt.textContent += " * ";
}

division.onclick = function () {
    expression += " / ";
    txt.textContent += " / ";
}

smt.onclick = function () {
    //eval函数可以自动对字符串求值，很方便！！！准确且减少bug
    rst = eval(expression);
    txt.textContent = String(rst);
    expression = String(rst);
}



