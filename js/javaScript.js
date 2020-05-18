//Tired of constanly writing it out
const root = document.documentElement;

//Global variable for x
//Note: Value only changes while mouse is over the image
var z = 0;

//While mouse is over the image, move the crop line.
function mouseMove(event) {
	//mouse x position in percentage
	var x = (event.clientX / innerWidth)*100;
	//Whole numbers
	z=~~x;
	
	//Set value for HTML. 100-z mirrors the movement.
	root.style.setProperty('--mouse-x', 100-z+"%");
	
	//Test Values
	//document.getElementById('demoT').innerHTML = "Mouse position once leave Div: " + z;
	
	//Kills the centerCrop() while mouse is over the img
	stopTime();
}

//Global variable for setInterval
var time;

//Starts the timer
function startTime(){
	//1000 = 1sec
	time = setInterval(centerCrop, 10);
}

//Stops the timer
function stopTime(){
	clearInterval(time);
}

//Once mouse is not over the image, auto center the crop
function centerCrop() {
	//48% simply crops better on my face
	if (z<48){
		z++;
		root.style.setProperty('--mouse-x', 100-z+"%");
		//document.getElementById('demoT').innerHTML = "Mouse position once leave Div: " + z;
	}
	else if (z>48){
		z--;
		root.style.setProperty('--mouse-x', 100-z+"%");
		//document.getElementById('demoT').innerHTML = "Mouse position once leave Div: " + z;
	}
	//Kills timer once centered
	else if (z==48){
		stopTime()
	}	
}


// Show/Hide more text
function myFunction(button){
	var x = button.id;
	switch (x) {
		case 'btn1':
			myFunction1(x);
			break;
		case 'btn2':
			myFunction2(x);
			break;
		case 'btn3':
			myFunction3(x);
			break;
		case 'btn4':
			myFunction4(x);
			break;
		case 'btn5':
			myFunction5(x);
			break;
		case 'btn6':
			myFunction6(x);
			break;
	}
}
function myFunction1(button){
	var dots = document.getElementById("dots1");
	var moreText = document.getElementById("more1");
	var btnText = document.getElementById("btn1");

	if(dots.style.display === "none"){
		dots.style.display = "inline";
		btnText.innerHTML = "&#9207";
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "&#9206";
		moreText.style.display = "inline";
	}
}
function myFunction2(button){
	var dots = document.getElementById("dots2");
	var moreText = document.getElementById("more2");
	var btnText = document.getElementById("btn2");

	if(dots.style.display === "none"){
		dots.style.display = "inline";
		btnText.innerHTML = "&#9207";
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "&#9206";
		moreText.style.display = "inline";
	}
}
function myFunction3(button){
	var dots = document.getElementById("dots3");
	var moreText = document.getElementById("more3");
	var btnText = document.getElementById("btn3");

	if(dots.style.display === "none"){
		dots.style.display = "inline";
		btnText.innerHTML = "&#9207";
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "&#9206";
		moreText.style.display = "inline";
	}
}
function myFunction4(button){
	var dots = document.getElementById("dots4");
	var moreText = document.getElementById("more4");
	var btnText = document.getElementById("btn4");

	if(dots.style.display === "none"){
		dots.style.display = "inline";
		btnText.innerHTML = "&#9207";
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "&#9206";
		moreText.style.display = "inline";
	}
}
function myFunction5(button){
	var dots = document.getElementById("dots5");
	var moreText = document.getElementById("more5");
	var btnText = document.getElementById("btn5");

	if(dots.style.display === "none"){
		dots.style.display = "inline";
		btnText.innerHTML = "&#9207";
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "&#9206";
		moreText.style.display = "inline";
	}
}
function myFunction6(button){
	var dots = document.getElementById("dots6");
	var moreText = document.getElementById("more6");
	var btnText = document.getElementById("btn6");

	if(dots.style.display === "none"){
		dots.style.display = "inline";
		btnText.innerHTML = "&#9207";
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "&#9206";
		moreText.style.display = "inline";
	}
}