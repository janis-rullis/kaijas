function ajaxFunction()
{
   var xmlhttp;
   if (window.XMLHttpRequest)  xmlhttp=new XMLHttpRequest();
   xmlhttp.open("GET","javascripts/ajax.xml",true);
   xmlhttp.onreadystatechange=ready;
   function ready()
   {
      if(xmlhttp.readyState==4)
      {  
         var xmlDoc=xmlhttp.responseXML.documentElement;
         document.getElementById("ajaxTarget").innerHTML=xmlDoc.getElementsByTagName('midContent')[0].childNodes[0].nodeValue;
         document.getElementById("ajaxTarget2").innerHTML=xmlDoc.getElementsByTagName('leftContent')[0].childNodes[0].nodeValue;
//Jquery
      }
   }
   xmlhttp.send(null);
}