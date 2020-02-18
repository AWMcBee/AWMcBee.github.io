//Footer Mountains movement
window.onscroll = function(ev) {
	//Total Height of the page - Amount scrolled in Y direction
	var scrollHeight = (-document.body.offsetHeight)+(window.innerHeight + window.scrollY);
	
	if (scrollHeight > 0){
		scrollHeight == 0;
	}
	//Value Test
	//document.getElementById("test").innerHTML = "Total Number: " + scrollHeight;
				
	//Left Mountains
	document.getElementById("mountain_L_4").style.bottom = (scrollHeight*4) +"px";
	document.getElementById("mountain_L_3").style.bottom = (scrollHeight*2.5) +"px";
	document.getElementById("mountain_L_2").style.bottom = (scrollHeight*2) +"px";
	document.getElementById("mountain_L_1").style.bottom = (scrollHeight*1) +"px";
	//Right Mountains
	document.getElementById("mountain_R_4").style.bottom = (scrollHeight*3) +"px";
	document.getElementById("mountain_R_3").style.bottom = (scrollHeight*3.5) +"px";
	document.getElementById("mountain_R_2").style.bottom = (scrollHeight*1) +"px";
	document.getElementById("mountain_R_1").style.bottom = (scrollHeight*1.5) +"px";
};