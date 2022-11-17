// let sel = document.getElementById("sel");

// q=document.getElementById("here");

// let n = document.getElementById("kind");


// async function selecOPT(){

// const respon=await fetch("https://www.breakingbadapi.com/api/characters");

// const data =await respon.json()


// console.log(data)






//     for(i=0;i<data.length;i++){
    
    
   

       
//     sel.innerHTML +=`
    
//     <option value= ${data[i].name} id="yes">${data[i].name} </option>
    
    
    
    
    
//     `}


  



// }




// selecOPT()
// async function selec(){

// console.log('asdasda')
//     const respon = await fetch("https://www.breakingbadapi.com/api/characters");

//     const data =  await respon.json();




//     for(i=0; i < data.length; i++){
//  if(data[i].name == sel.value){
    
//         n.src = `${data[i].img}`
//     }


    





// }}








// async function pict(){


//     const respon=await fetch("https://www.breakingbadapi.com/api/characters");

//     const data =await respon.json()


   





// }
// pict()



// let sel = document.getElementById('sel')
// let dd =document.getElementById("kind")

// async function d() {
//     let pp = await fetch("https://www.breakingbadapi.com/api/characters");
//     let response = await pp.json()
//     for (let i = 0; i < response.length; i++) {
//        sel.innerHTML += `<option value = '${response[i].img}'> ${response[i].name}</option>`
        
//     }

// }

// d()

// async function selec(){
// // let r = await fetch("https://www.breakingbadapi.com/api/characters");
// // let response = await r.json();
// // for(i=0;i<response.length;i++){

// // if(response[i].name==sel.value){

// // dd.src=response[i].img
// // }


// // }

// dd.src = sel.value

// }


let z=document.getElementById("sel");
let mm=document.getElementById("kind");


async function select(){

let ya=await fetch("https://www.breakingbadapi.com/api/characters");
let resp= await ya.json();


// console.log(resp);


for (let i = 0; i < resp.length; i++) {



z.innerHTML +=`

<option value="${resp[i].img}">${resp[i].name} </option>


`


}

}

select();



async function selec(){

let ya=await fetch("https://www.breakingbadapi.com/api/characters");

let resp = await ya.json();




   mm.src=z.value








}


