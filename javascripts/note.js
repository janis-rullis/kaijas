window.onload=setupEvents;

function setupEvents() {
x=document.getElementById("menu");
x.onmousedown=showMenus;
x=document.getElementById("footRight");
x.onmousedown=showMenus;
x=document.getElementById("submit");
x.onmousedown=check;
$("#smWin").mousedown(function(){window.location='window.html';})
$("#smPc").mousedown(function(){window.location='pc.html';})
$("#mapTable").mousedown(function(){window.location='table.html';})
$("#smPhotos").mousedown(function(){window.location='images.html';})
$("#smNote").mousedown(function(){window.location='note.html';})
$("#smBook").mousedown(function(){window.location='book.html';})
$("#smBed").mousedown(function(){window.location='bed.html';})
x=document.getElementById("input4");
x.onchange=previewPhoto;
}

function previewPhoto()
{ 
  document.getElementById('lPrevImg').src=document.getElementById('input4').value;
}

function writeNote()
{
document.getElementById('rNote').innerHTML=document.getElementById('input0').value;
document.getElementById('rPrevImg').src=document.getElementById('input4').value;
var nameSurnAge=document.getElementById('input1').value;
nameSurnAge=nameSurnAge+' '+document.getElementById('input2').value;
nameSurnAge=nameSurnAge+' ('+document.getElementById('input3').value+')';
document.getElementById('nameSurnAge').innerHTML=nameSurnAge;
}