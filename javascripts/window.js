var gull0;
var gull1;
var gull2;
var gullZone;
var vport1Prcnt;
var cupLeft;
var cupTop;
var cupZoneX;
var cupZoneY;
var op0=0;
var op1=0;
var op2=0;
var leftgull0=0;
var leftgull1=150;
var leftgull2=50;
var leftgull;
var element;
var cought=0;
var gullTop;
var xcoor;
var ycoor;
var fly=1;

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
   getGullData();
   getCupZone();

   getgull0();
   getgull1();
   getgull2();

   gull0.onmousedown=catchGulls;
   gull1.onmousedown=catchGulls;
   gull2.onmousedown=catchGulls;
   return false;
}

function getGullData()                     //dabu kaijas,zonu
{
   vpWidth1Prcnt=document.body.offsetWidth/100;   //dabu kaiju atlautas zonas x koord %
   vpHeight1Prcnt=document.body.offsetHeight/100;  
   gullZone=Math.round(vpWidth1Prcnt);
   gullZone=gullZone*60;                    //atlauta zona = 60% pa kreisi

   gull0=document.getElementById("gull0");
   gull1=document.getElementById("gull1");
   gull2=document.getElementById("gull2");
   return false;
} 

function getCupZone()
{
   cupTop=vpHeight1Prcnt*76;
   cupLeft=vpWidth1Prcnt*46;
   var cupHeight=vpHeight1Prcnt*1;
   var cupWidth=vpWidth1Prcnt*7;
   cupZoneX=cupLeft+cupWidth;
   cupZoneY=cupTop+cupHeight;
}

function getgull0()      
{
  a=moveLeft(gull0,op0,leftgull0);
  op0=a[0];
  leftgull0=a[1];
  timergull0=setTimeout("getgull0()",0);
}

function getgull1()      
{
  a=moveLeft(gull1,op1,leftgull1);
  op1=a[0];
  leftgull1=a[1];
  timergull1=setTimeout("getgull1()",15);
}

function getgull2()      
{
  a=moveLeft(gull2,op2,leftgull2);  
  op2=a[0];
  leftgull2=a[1];
  timergull2=setTimeout("getgull2()",25);
}

function moveLeft(gull,op,movleft)
{
   if(movleft<=0) op=0;
   if(movleft>=gullZone) op=1;
   if(op==0) 
   {
      movleft++;
      gull.style.left=movleft+'px';      //ja op==0 tad left++ 
   }
   if(op==1) 
   {
      movleft--;  
      gull.style.left=movleft+'px';      //ja op==1 tad left-- 
   }
   return [op,movleft];
}

function catchGulls(e)
{
   fly=1;
   if (e == null) { e = window.event;}
   if(e.target) element=e.target;
   else element=e.srcElement;    
   elemId=element.id;
   timerId=window['timer'+elemId.toString()];      
   leftgull=window['left'+elemId.toString()];    
   getgullfnc=window['get'+elemId.toString()];    
   clearTimeout(timerId); //apstadina VISU kaiju lidosanu, ja lieto floatImage(element) tad tiek palaistas viena un ta pati fja paraleli   
   cought=1;  
   gullTop=element.offsetTop; 
   xcoor=e.clientX;
   ycoor=e.clientY;
   document.onmousemove=moveImage;
   return false;
}

function moveImage(e)
{
   if (e == null) { e = window.event;}
   gullPosX=leftgull+e.clientX-xcoor;
   gullPosY=gullTop+e.clientY-ycoor; 
   if((gullPosX>cupLeft&&gullPosX<cupZoneX)&&(gullPosY>cupTop&&gullPosY<cupZoneY))
   {
      element.style.display="none";
      fly=0;  //norada ka kaija nedrikst lidot     
   }
   else
   {    
      element.style.top=gullPosY+"px";
      element.style.left=gullPosX+"px"; 
      document.onmouseup=mouseup;
   }
  
}

function mouseup(e)
{  
   document.onmousemove=null;   

   if(cought==1&&fly!=0) 
   {
      window['left'+elemId.toString()]=gullPosX;
      getgullfnc();
      cought=0;
   } 
}
