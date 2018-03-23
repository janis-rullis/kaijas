window.onload=setupEvents;

function setupEvents() {
x=document.getElementById("menu");
x.onmousedown=showMenus;
x=document.getElementById("footRight");
x.onmousedown=showMenus;
x=document.getElementById("tm");
x.onmousedown=showMenus;
x=document.getElementById("tm1");
x.onmousedown=showMenus;
x=document.getElementById("clickOnMe");
x.onmousedown=ajaxFunction;
}