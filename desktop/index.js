(function(){
	var width = document.body.clientWidth;
	var screen_height = document.documentElement.clientHeight;
	// var background = document.querySelector(".background");
	var body = document.getElementsByTagName("body");
	body[0].style.height = screen_height + "px";
	// background.style.height = screen_height + "px";
})();
for (var i = 0; i < 11 ; i++) {
	var clock = document.getElementById("clock");
	var line = document.createElement("div");
	line.className = "line";
	line.style.WebkitTransformOrigin = "50% 100%";
	line.style.WebkitTransform = "translate(-50%, -100%) rotate("+ 30*(i+1) +"deg)";
	clock.appendChild(line);
}
for (var i = 0; i < 59 ; i++) {
	var clock = document.getElementById("clock");
	var line = document.createElement("div");
	line.className = "line_thin";
	line.style.WebkitTransformOrigin = "50% 100%";
	line.style.WebkitTransform = "translate(-50%, -100%) rotate("+ 6*(i+1) +"deg)";
	clock.appendChild(line);
}
var secondhand = document.getElementById("secondhand");
var minutehand = document.getElementById("minutehand");
var hourhand = document.getElementById("hourhand");
function getclock() {
	var date = new Date();
	var hour_now = date.getHours();
	var digital_clock = document.querySelector(".digital_clock");
	if (hour_now >= 12){
		var hour_now_12 = hour_now - 12;
	}else{ hour_now_12 = hour_now;}
	var minute_now = date.getMinutes();
	var second_now = date.getSeconds();
	// console.log(hour_now+'.'+minute_now+'.'+second_now);
	hourhand.style.WebkitTransformOrigin = "50% 100%";
	minutehand.style.WebkitTransformOrigin = "50% 100%";
	secondhand.style.WebkitTransformOrigin = "50% 100%";
	secondhand.style.WebkitTransform = "translate(-50%, -100%) rotate("+ second_now*6 +"deg)";
	minutehand.style.WebkitTransform = "translate(-50%, -100%) rotate("+ (minute_now*6+second_now/10) +"deg)";
	hourhand.style.WebkitTransform = "translate(-50%, -100%) rotate("+ (hour_now_12*30+minute_now*0.5+second_now/120) +"deg)";
	digital_clock.innerHTML = hour_now+":"+(minute_now<10 ? "0"+minute_now:minute_now)+":"+(second_now<10 ? "0"+second_now:second_now);
}
getclock();
setInterval(function(){getclock();}, 1000);

var input_backgroud = document.getElementById("get_background");		
var background = document.querySelector(".background");
var change_background_window = document.querySelector(".background_window");
var pic_path = "";

function change_background(){
	input_backgroud.click();
	input_backgroud.onchange = function(){
		pic_path = window.URL.createObjectURL(input_backgroud.files[0]);
		// alert(pic_path);
		background.style.backgroundImage = "url("+pic_path+")";
		change_background_window.style.transform = "translate(-50%, -50%)";
	}
}
change_background_window.addEventListener("click", function(){
	var btns = this.getElementsByTagName("i");
	var dom = event.target;
	if (dom.innerHTML == "平铺"){
		dom.className = "tile chosen";
		btns[1].className = "draw";
		btns[2].className = "center";
		background.style.backgroundImage = "url("+pic_path+")";
		background.style.transition = "all 0.1s ease";
		background.style.backgroundSize = "";
		background.style.backgroundRepeat = "";
		background.style.backgroundPosition = "";
	}
	if (dom.innerHTML == "拉伸"){
		dom.className = "draw chosen";
		btns[0].className = "tile";
		btns[2].className = "center";
		background.style.transition = "all 0.0s ease";
		background.style.backgroundImage = "url("+pic_path+")";
		background.style.backgroundRepeat = "";
		background.style.backgroundRepeat = "no-repeat";		
		background.style.backgroundSize = "100% 100%";
		background.style.backgroundRepeat = "";
	}
	if (dom.innerHTML == "居中"){
		dom.className = "center chosen";
		btns[0].className = "tile";
		btns[1].className = "draw";
		background.style.transition = "all 0.1s ease";
		background.style.backgroundRepeat = "no-repeat";		
		background.style.backgroundSize = "";
		background.style.backgroundPosition = "center";
	}
	if (dom.innerHTML == "X"){
		change_background_window.style.transform = "translate(-50%, -1150%)";
	}
}, false);