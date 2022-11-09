function myInfo(){

console.log(123)
theName=document.getElementById("myName");
 theAge=document.getElementById("myAge");
 thegendmale=document.getElementById("mal");
 thegendfem=document.getElementById("kind");
 thedescrip=document.getElementById("description");
 theMajor=document.getElementById("major");
 theHtml=document.getElementById("html");
 theCss=document.getElementById("css");
 theJava=document.getElementById("js");

 

 localStorage.setItem("My name is:",theName.value);
 localStorage.setItem("My age is:",theAge.value);
 localStorage.setItem("My gender is1:", thegendmale.checked);
 localStorage.removeItem("My gender is1:");
 localStorage.setItem("My gender is:", thegendfem.checked);
 localStorage.removeItem("My gender is:");
 localStorage.setItem("about me:",  thedescrip.value);
 localStorage.setItem("my major is:",  theMajor.value);

 localStorage.removeItem("the language I learnt:");
 localStorage.removeItem("the language I learnt:1");
 localStorage.removeItem("the language I learnt:2");
 localStorage.removeItem("language");
 localStorage.removeItem("My gender :");


//  let gend = document.forms[0];

//  for (i = 0; i < gend.length; i++) {
//    if (gend[i].checked) {
//      txt =gend[i].value + " ";
//    }
//  }
//  localStorage.setItem("My gender :", txt);



 if ( thegendmale.checked == true){
    localStorage.setItem("my gender is:", thegendmale.value);}
 else{
   localStorage.setItem("my gender is:", thegendmale.value);}



//  }
 
// if(thegendfem.checked==true){
   
//     localStorage.setItem("my genderis:", thegendfem.value);


//  }else{
//     localStorage.removeItem("my genderis:");

//  }

 if (theHtml.checked == true){
    localStorage.setItem("MY SKILLS IS1:", theHtml.value);
 }else{
    localStorage.removeItem("MY SKILLS IS1:");



 }

 if (theCss.checked == true){
    localStorage.setItem("MY SKILLS IS2:", theCss.value);}
 else{

    localStorage.removeItem("MY SKILLS IS2:");


 }

 if (theJava.checked == true){
    localStorage.setItem("MY SKILLS IS3:", theJava.value);
 }
 else{

    localStorage.removeItem("MY SKILLS IS3:");

 }
 theName.value=localStorage.getItem("My name is:")
 theAge.value=localStorage.getItem("My age is:")
 thegendmale.value=localStorage.getItem("my gender is:")
 thegendfem.value=localStorage.getItem("my genderis:")



 thedescrip.value=localStorage.getItem("about me:")
 theMajor.value=localStorage.getItem("my major is:")
 theHtml.value=localStorage.getItem("MY SKILLS IS1:")
 theCss.value=localStorage.getItem("MY SKILLS IS2:")
 theJava.value=localStorage.getItem("MY SKILLS IS3:")


 cad= document.getElementById("cardd")


 cad.style.border="1px solid black"

 cad.style.padding="5px 30px"
cad.innerHTML=
 
 
 `<div>  
 
<h1>ABOUT ME</h1>

${localStorage.key(3)}   ${theName.value} <br><br><br>


${localStorage.key(2)}  ${theMajor.value} <br><br><br>



${localStorage.key(4)}   ${thegendmale.value} <br><br><br>
 
 
${localStorage.key(1)}   ${theAge.value} <br><br><br>
 
${localStorage.key(3)}  ${thedescrip.value} <br><br><br>
${localStorage.key(5)}  ${ theHtml.value} <br><br><br>
${localStorage.key(6)}  ${ theCss.value} <br><br><br>
${localStorage.key(7)}  ${theJava.value} <br><br><br>
 
 


 </div`

 


 
}
function card(){

    
}

