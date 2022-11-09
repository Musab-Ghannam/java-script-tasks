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
     if( theCss.checked== true){
        sessionStorage.setItem("Technology usedis", thegendmale.value);}
     if( theJava.checked== true){
        sessionStorage.setItem("Technology used is:", theJava.value);}
     if( thenet.checked== true){
        sessionStorage.setItem("Technology used is.", thenet.value);}
    
    
    
    
     if (theCli.checked == true){
        sessionStorage.setItem("User Type is", theCli.value);
     }
     if (thevisit.checked == true){
        sessionStorage.setItem("User Type is:", thevisit.value);
     }
     if (thepubl.checked == true){
        sessionStorage.setItem("User Type is.", thepubl.value);
     }















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
    
    ${sessionStorage.key(3)}   ${theName.value} <br><br><br>
    
    
    ${sessionStorage.key(2)}  ${thedescrip.value} <br><br><br>
    
    
    
    ${sessionStorage.key(4)}   ${ theHtml.value} <br><br><br>
     
     
    ${sessionStorage.key(1)}   ${ theCss.value} <br><br><br>
     
    ${sessionStorage.key(3)}  ${theJava.value} <br><br><br>
    ${sessionStorage.key(5)}  ${ thenet.value} <br><br><br>
    ${sessionStorage.key(6)}  ${  theCli.value} <br><br><br>
    ${sessionStorage.key(7)}  ${thevisit.value} <br><br><br>
    ${sessionStorage.key(8)}  ${thepubl.value} <br><br><br>
     
     
    
    
    
    
    
     </div`
    
     
    
    
     
    }
    function card(){
    
        
    }
    
    