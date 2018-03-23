window.onload=setupEvents;

function setupEvents()
{
   x=document.getElementById("menu");
   x.onmousedown=showMenus;
   x=document.getElementById("footRight");
   x.onmousedown=showMenus;
   $("#smWin").mousedown(function(){window.location='window.html';})
   $("#smPc").mousedown(function(){window.location='pc.html';})
   $("#mapTable").mousedown(function(){window.location='table.html';})
   $("#smPhotos").mousedown(function(){window.location='images.html';})
   $("#smNote").mousedown(function(){window.location='note.html';})
   $("#smBook").mousedown(function(){window.location='book.html';})
   $("#smBed").mousedown(function(){window.location='bed.html';})
   document.onmouseup=mouseup;
   startDream('dream1', 4);
   startDream('dream2', 39);
   startDream('dream3', 150);
}

function startDream(id, after_s){
	setTimeout(function(){
		// Allow to be dragged.
	   onMouseDown(id, bed);
	   
	   // Hide others.
	   var elements = document.querySelectorAll('.dream');
	   
	   for (var i = 0; i < elements.length; i++){
			elements[i].style.display = 'none';
	   }
	   
	   // Display this dream.
	   document.getElementById(id).style.display = 'block';
   }, after_s * 1000);
}

var targ;   
var pleft;
var ptop;
var xcoor;
var ycoor;

function bed(e)
{   
   if (!e) { e = window.event;}
   if(e.target) targ=e.target;
   else targ=e.srcElement;  
   pleft=targ.offsetLeft;   //elem.atrasanas no kreisas malas
   ptop=targ.offsetTop;    //no augsas
   xcoor=e.clientX;
   ycoor=e.clientY;   
   document.onmousemove=moveImage;
   return false;    
}

function moveImage(e)         // parvieto bildi
{
if (e == null) { e = window.event;}
targ.style.left=pleft+e.clientX-xcoor+"px";
targ.style.top=ptop+e.clientY-ycoor+"px";
return false; 
}

function mouseup()
{
document.onmousemove=null;    //beidz parvietot
return false;
}

function onMouseDown(id, event){
	x=document.getElementById(id);
	if(typeof x !== 'undefined' && x !== null){
		x.onmousedown=event;
		return true;
	}
	return false;
}