function myInfo(){

  console.log(123);
    theName=document.getElementById("myName");
     
    
     thedescrip=document.getElementById("description");
     
     theHtml=document.getElementById("html");
     theCss=document.getElementById("css");
     theJava=document.getElementById("js");
     thenet=document.getElementById("net");
    
     theCli=document.getElementById("cli");
     thevisit=document.getElementById("visit");
     thepubl=document.getElementById("publi");




     
    
    sessionStorage.setItem("the subject is:",theName.value);
    
    
    sessionStorage.setItem("about my project:",thedescrip.value);
   
    sessionStorage.setItem("Technology used is",theHtml.value);
    sessionStorage.setItem("Technology usedis",theCss.value);
    sessionStorage.setItem("Technology used is:",theJava.value);
    sessionStorage.setItem("Technology used is.",thenet.value);
    
    sessionStorage.setItem("User Type is",theCli.value);
    sessionStorage.setItem("User Type is:",thevisit.value);
    sessionStorage.setItem("User Type is.",thepubl.value);
    
    

    
    
    
     if ( theHtml.checked == true){
        sessionStorage.setItem("Technology used is", theHtml.value);}

        else{
         sessionStorage.removeItem("Technology used is");
     
     
     
      }


     if( theCss.checked== true){
        sessionStorage.setItem("Technology usedis", theCss.value);}

        else{
         sessionStorage.removeItem("Technology usedis");
     
     
     
      }



     if( theJava.checked== true){
        sessionStorage.setItem("Technology used is:", theJava.value);}

        else{
         sessionStorage.removeItem("Technology used is:")}
     
     
     



     if( thenet.checked== true){
        sessionStorage.setItem("Technology used is.", thenet.value);}
    
        else{
         sessionStorage.removeItem("Technology used is.")}
    
    
     if (theCli.checked == true){
        sessionStorage.setItem("User Type is", theCli.value);
     } else{
      sessionStorage.removeItem("User Type is")}






     if (thevisit.checked == true){
        sessionStorage.setItem("User Type is:", thevisit.value);
     }
     else{
      sessionStorage.removeItem("User Type is:")}



     if (thepubl.checked == true){
        sessionStorage.setItem("User Type is.", thepubl.value);
     }else{
      sessionStorage.removeItem("User Type is.")}














     theName.value=sessionStorage.getItem("the subject is:")
     thedescrip.value=sessionStorage.getItem("about my project:")
     theHtml.value=sessionStorage.getItem("Technology used is")
     theCss.value=sessionStorage.getItem("Technology usedis")
    
    
    
     theJava.value=sessionStorage.getItem("Technology used is:")
     thenet.value=sessionStorage.getItem("Technology used is.")


     theCli.value=sessionStorage.getItem("User Type is")
     thevisit.value=sessionStorage.getItem("User Type is:")
     thepubl.value=sessionStorage.getItem("User Type is.")
    
    
     cad= document.getElementById("cardd")
    
    
     cad.style.border="1px solid black"
    
     cad.style.padding="5px 30px"
    cad.innerHTML=
     
     
     `<div>  
     
    <h1>Masterpiece</h1>
    
    the subject is:     ${theName.value} <br><br><br>
    
    
    "about my project:"    ${thedescrip.value} <br><br><br>
    
    





    User Type is           ${  theCli.value} <br><br><br>
      
    
    User Type is:        ${  thevisit.value} <br><br><br>


    User Type is.            ${    thepubl.value} <br><br><br>






    
    Technology used is  ${ theHtml.value} <br><br><br>
     
     
    Technology usedis                ${   theCss.value} <br><br><br>
     
    
    Technology used is:             ${  theJava.value} <br><br><br>
    "Technology used is.                ${     thenet.value} <br><br><br>
   
   
   
     
     
    
    
    
    
    
     </div`
    
     
    
    
     
    }
   
    