var x;
var inpLen;
var empty;
var goodSymb;
var goodWord;

function check()
{
   empty=0;
   goodWord=0;
   isEmpty();
   if(empty==1) 
   {
      alert("Aizpildiet tuksos laukus!");
   }  
   if(goodWord!=0) 
   {      
      alert('Nepareizi dati');
   } 
   if(goodWord==0&&empty==0) writeNote();     
}

function isEmpty()
{
   for(var i=0;i<4;i++)
   {
      
      {
         a=document.getElementById('input'+i).value;
         document.getElementsByTagName('span')[i].style.display='none'; 
         inpLen=a.length;
         if(inpLen<1) 
         {
            document.getElementsByTagName('span')[i].style.display='inline';
            empty=1;
         }
         if(inpLen>0&&i!=0)
         {
            checkType(i);                  
         }
      }
   }
}

function checkType(i)
{
   goodSymb=0;
   if(i==1||i==2) 
   {
      typeLetter();      
   }    
   if(i==3)
   {
      typeNumber();
   }
 
   if(goodSymb!=inpLen)
   {
      goodWord++;
      document.getElementsByTagName('span')[i].style.display='inline';           
   } 
}

function typeLetter()
{
   var burtuDb=new Array("a","ā","b","c","č","d","e","ē","f","g","ģ","h","i","ī","j","k","ķ","l","ļ","m","n","ņ","o","p","r","s","š","t","u","ū","v","w","x","y","z","ž");
   var burtuDbLen=burtuDb.length;  
   for(var j=0;j<inpLen;j++) //parbauda katru varda simbolu
   {
      for(var k=0;k<burtuDbLen;k++)   
      {        
         var symb=a.charAt(j);
         symb=symb.toLowerCase();
         if(symb==burtuDb[k])
         {	              	  
            goodSymb++;        //skaita pareizos simbolus
         }
      }
    }
}

function typeNumber()
{   
   for(var l=0;l<inpLen;l++) //parbauda katru varda simbolu
   {
      var symb=a.charAt(l);
      for(var k=0;k<10;k++)   
      {  
         if(symb==k)
         {	              	  
            goodSymb++;        //skaita pareizos simbolus
         }
       }
    }
    if(goodSymb==inpLen) if(a<0||a>120) goodSymb--;  // pareizo simb.sk-1=nepareizs vards
}