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


function _alert(text){
    dialog("1");
}
function _confirm(text){
    dialog("2");
}
function _prompt(text){
    dialog("3");
}
function dialog(method, msg, func1, func2){
    var getMsg = "";
    var viewWidth = parseInt(window.screen.width);
    var viewHeight = parseInt(window.screen.height);
    document.body.style.overflowY = "hidden";
    document.body.style.overflowX = "hidden";
    var divBackground = document.createElement("div");
    divBackground.className = "backgroundDiv";
    divBackground.style.position = "absolute";
    divBackground.style.left = "0px";
    divBackground.style.top = "0px";
    divBackground.style.width = "100%";
    divBackground.style.height = "100%";
    if (springweb_typeIsChrome || springweb_typeIsFireFox) {
        divBackground.style.backgroundColor = "rgba(0,0,0,0.7)";
    } else {
        divBackground.style.backgroundColor = "#000000";    
        divBackground.style.filter = "alpha(opacity=50)";
    } 
    divBackground.style.zIndex = "99";
    document.body.appendChild(divBackground);

    var dialogWidth = viewWidth/1.5;
    var dialogHeight = viewWidth/3;

    var divDialog = document.createElement("div");
    divDialog.className = "dialogDiv";
    divDialog.style.width = dialogWidth + "px";
    divDialog.style.height = dialogHeight + "px";
    divDialog.style.position = "absolute";
    divDialog.style.top = viewHeight/2 - dialogHeight/2 + "px";
    divDialog.style.left = viewWidth/2 - dialogWidth/2 + "px";
    // divDialog.backgroundColor = "#ffffff";
    // divDialog.style.zIndex = "100";


    // if (title) {
    //    var divHead = document.createElement("div");
    //     divHead.innerHTML = title;
    //     divHead.style.height = "10%";
    //     divHead.style.width = "100%";
    //     divHead.style.backgroundColor = "#ffffff";
    //     divHead.style.fontSize = "14px";
    //     divHead.style.color = "#000000";
    //     divHead.style.textIndent = "10px";
    //     divDialog.appendChild(divHead);
    // }
    
    var divContent = document.createElement("div");
    divContent.className = "contentDiv";
    // if (title) {
    //    divContent.style.height = "90%";
    // }
    // else{
    //     divContent.style.height = "100%";
    // // }
    // divContent.style.width = "100%";
    // divContent.style.fontSize = "12px";
    // divContent.style.backgroundColor = "#ffffff";
    // divContent.style.textAlign = "center";
    divContent.innerHTML = "<br/><br/>" + msg + "<br/><br/>";
    divDialog.appendChild(divContent);
    if (method == "3") {
        var input = document.createElement("input");
        input.className = "input";
        input.style.width = "90%";
        divContent.appendChild(input);
        var div = document.createElement("div");
        div.innerHTML = "<br/><br/>"
        divContent.appendChild(div);
    }

    var buttonConform = document.createElement("button");
    buttonConform.className = "button1";
    buttonConform.style.cursor = "hand";
    buttonConform.innerHTML = "确定";
    buttonConform.style.background = "black";
    buttonConform.style.bottom = "0px"
    if (method != "1") {
        buttonConform.style.float = "left";
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
        buttonClose.style.float = "right";
        buttonClose.style.width = "50%";
        buttonClose.style.background = "red";
        buttonClose.style.cursor = "hand";
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