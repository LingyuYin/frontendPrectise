var springweb_typeIsIE = false;
var springweb_typeIsGecko = false;
var springweb_typeIsWebkit = false;

var springweb_typeIsIE6 = false;
var springweb_typeIsIE7 = false;
var springweb_typeIsIE8 = false;
var springweb_typeIsFireFox = false;
var springweb_typeIsChrome = false;
var springweb_typeIsSafari = false;

var agent = window.navigator.userAgent;

if (agent.indexOf("MSIE 6") != -1) {
    springweb_typeIsIE6 = true;
    springweb_typeIsIE = true;
}
else if (agent.indexOf("MSIE 7") != -1) {
    springweb_typeIsIE7 = true;
    springweb_typeIsIE = true;
}
else if (agent.indexOf("MSIE 8") != -1) {
    springweb_typeIsIE8 = true;
    springweb_typeIsIE = true;
}
else if (agent.indexOf("Firefox") != -1) {
    springweb_typeIsFireFox = true;
    springweb_typeIsGecko = true;
} else if (agent.indexOf("Chrome") != -1) {
    springweb_typeIsChrome = true;
    springweb_typeIsWebkit = true;
}
else if (agent.indexOf("Safari") != -1) {
    springweb_typeIsSafari = true;
    springweb_typeIsWebkit = true;
}


function _alert(text, func1, func2){
    dialog("1", text, func1(), func2());
}
function _confirm(text){
    dialog("2", text, func1(), func2());
}
function _prompt(text){
    dialog("3", text, func1(), func2());
}
function dialog(method, msg, func1, func2){
    var getMsg = "";
    var viewWidth = parseInt(window.screen.width);
    var viewHeight = parseInt(window.screen.height);
    document.body.style.overflowY = "hidden";
    document.body.style.overflowX = "hidden";
    var divBackground = document.createElement("div");
    divBackground.className = "backgroundDiv";
    document.body.appendChild(divBackground);

    var dialogWidth = viewWidth/1.5;
    var dialogHeight = viewWidth/3;

    var divDialog = document.createElement("div");
    divDialog.className = "dialogDiv";
    divDialog.style.width = dialogWidth + "px";
    divDialog.style.height = dialogHeight + "px";
    divDialog.style.top = viewHeight/2 - dialogHeight/2 + "px";
    divDialog.style.left = viewWidth/2 - dialogWidth/2 + "px";
    
    var divContent = document.createElement("div");
    divContent.className = "contentDiv";
    divContent.innerHTML = "<br/>" + msg + "<br/>";
    divDialog.appendChild(divContent);

    if (method == "3") {
        var input = document.createElement("input");
        input.className = "input";
        // input.style.width = "90%";
        divContent.appendChild(input);
        var div = document.createElement("div");
        div.innerHTML = "<br/>"
        divContent.appendChild(div);
    }

    var buttonConform = document.createElement("button");
    buttonConform.className = "button1";
    buttonConform.innerHTML = "确定";
    if (method != "1") {
        buttonConform.style.left = "0px";
        buttonConform.style.width = "50%";
    }
    buttonConform.onclick = function(){
        document.body.removeChild(divBackground);
        document.body.removeChild(divDialog);
        document.body.style.overflowY = "";
        document.body.style.overflowX = "";
        if (method != "3") {
            func1();
        }
        if (method == "3") {
            getMsg = input.value;
            func1(getMsg);
        }
    }

    divContent.appendChild(buttonConform);
    if (method != "1"){
        var buttonClose = document.createElement("button");
        buttonClose.className = "button2";
        buttonClose.innerHTML = "取消";
        buttonClose.onclick = function(){
            document.body.removeChild(divBackground);
            document.body.removeChild(divDialog);
            document.body.style.overflowY = "";
            document.body.style.overflowX = "";
            if (method == "2") {
                func2();
            }
            if (method == "3") {
                func2();
            }
        }
        divContent.appendChild(buttonClose);
    }
    divDialog.focus();
    document.body.appendChild(divDialog);
}