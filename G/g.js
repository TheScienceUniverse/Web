function strtG(){
	document.getElementById('fip').addEventListener('change', readSingleFile, false);
}
function reloadPage(){
	location = location;
}

var str = "";
var contents;
function readSingleFile(evt){
	var f = evt.target.files[0];
	if(f){
		var r = new FileReader();
		r.onload = function(e){
			contents = e.target.result;
			str = contents.toString();
//			alert(contents.length);
			if(f.name === "xy.txt"){
		document.getElementById('fip').disabled = true;
		document.getElementById('pbtn').disabled = false;
		document.getElementById('con').textContent = "File Status: Success";
			}
//	f.name, f.type, f.size, contents.substr(0, f.size);
		}
		r.readAsText(f);
	}else{ 
		alert("Failed to load file");
	}
}
function setDivText(){
	var arr = str.split("\n");
	var n = arr.length - 1;
//	document.getElementById('con').textContent = n.toString();
}

//...Drawing Section
var canvas;
var ctx;
function setPixel(x, y, col){
	ctx.fillStyle = col;
	ctx.fillRect(x, y, 1, 1);
}
function makeGraph(){
	canvas = document.getElementById("graphics");
	ctx = canvas.getContext("2d");
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	var i;
//...AXIS
	for(i=0; i<=500; i++){
		setPixel(250, i, "blue");
		setPixel(i, 250, "blue");
	}	
//...Plot
	var pts = contents.split("\n");
	var n = pts.length;
	var xy = "";
	var x = 0;
	var y = 0;
	for(i=0; i<n; i++){
		xy = (pts[i]).split(" ");
		x = parseInt(xy[0]);
		y = parseInt(xy[1]);
		setPixel(x, y, "white");
	}
	document.getElementById('pbtn').disabled = true;
}
