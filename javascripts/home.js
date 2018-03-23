window.onload=setupEvents;

function setupEvents() {
x=document.getElementById("menu");
x.onmousedown=showMenus;
x=document.getElementById("footRight");
x.onmousedown=showMenus;
$("#smWin,#mapWindow").mousedown(function(){window.location='window.html';})
$("#smPc,#mapPc").mousedown(function(){window.location='pc.html';})
$("#mapTable").mousedown(function(){window.location='table.html';})
$("#smPhotos").mousedown(function(){window.location='images.html';})
$("#smNote").mousedown(function(){window.location='note.html';})
$("#smBook,#mapBook").mousedown(function(){window.location='book.html';})
$("#smBed,#mapBed").mousedown(function(){window.location='bed.html';})
onMouseDown('tm', showMenus);
onMouseDown('tm1', showMenus);
if(typeof ajaxFunction === 'function'){
	onMouseDown('clickOnMe', ajaxFunction);
}
}

function onMouseDown(id, event){
	x=document.getElementById(id);
	if(typeof x !== 'undefined' && x !== null){
		x.onmousedown=event;
		return true;
	}
	return false;
}