var hide=new Array(4);
hide[0]=0;   
hide[1]=0;   
hide[2]=0;   
hide[3]=0;  


function showMenus(e)
{
   var count;
   var y;
   var element;
   if (e == null) { e = window.event;}
   if(e.target) element=e.target;
   else element=e.srcElement;    
   elemId=element.id;

   if(elemId=='menu')
   {
      y=document.getElementById("submenu").style;
      count=0;
      show=hide[0];
   } 

   if(elemId=='footRight')
   {
     y=document.getElementById("footLeft").style;
      count=1;
      show=hide[1];
   } 
   if(elemId=='tm')
   {
      y=document.getElementById("rTreeMenuBody").style;
      count=2;
      show=hide[2];
   }
   if(elemId=='tm1')
   {
      y=document.getElementById("rTreeMenuBody1").style;
      count=3;
      show=hide[3];
   }
   if(show==0) 
   {
      y.display="block";
      hide[count]=1;    
   }
   else 
   {
     y.display="none";
     hide[count]=0;          
   }   

   return false;   
}