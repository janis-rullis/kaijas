window.onload=setupEvents;

function setupEvents() {
x=document.getElementById("menu");
x.onmousedown=showMenus;
x=document.getElementById("footRight");
x.onmousedown=showMenus;
$("#smWin").mousedown(function(){window.location='window.html';})
$("#smPc").mousedown(function(){window.location='pc.html';})
$("#smPhotos").mousedown(function(){window.location='images.html';})
$("#smNote").mousedown(function(){window.location='note.html';})
$("#smBook").mousedown(function(){window.location='book.html';})
$("#smBed").mousedown(function(){window.location='bed.html';})
$("#joker").mousedown(function(){window.location='images/joker.jpg';})
$("#jack").mousedown(function(){window.location='images/jack.jpg';})
$("#towers").mousedown(function(){window.location='images/towers.jpg';})
$("#piik").mousedown(function(){window.location='images/piik.jpg';})
$("#piik2").mousedown(function(){window.location='images/piik2.jpg';})
$("#note").mousedown(function(){window.location='note.html';})
$("#shower").mousedown(function(){window.location='images/shower.jpg';})
$("#jim").mousedown(function(){window.location='images/jim.jpg';})
}
