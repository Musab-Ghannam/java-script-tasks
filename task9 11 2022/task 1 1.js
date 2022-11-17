function myInfo(){


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






var elements = document.getElementsByName("gend");


for(i=0;i<elements.length;i++){

 if ( elements[i].checked==true){

    localStorage.setItem("my gender is:", elements[i].value);}



}


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

My name is:  ${theName.value} <br><br><br>


My major is :   ${theMajor.value} <br><br><br>



My gender is :  ${thegendmale.value} <br><br><br>
 
 
My age is:   ${theAge.value} <br><br><br>
 
About me:  ${thedescrip.value} <br><br><br>
MY SKILLS IS1: ${ theHtml.value} <br><br><br>
MY SKILLS IS2:   ${ theCss.value} <br><br><br>
MY SKILLS IS3:   ${theJava.value} <br><br><br>
 
 


 </div`
 


console.log(5)

 
}
z=5
document.write(z)

