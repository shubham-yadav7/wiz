const nextButton = document.querySelector(".next-button1");
const previousButton = document.querySelector("#previous-button");
const panel = document.querySelectorAll(".panel");
const next = document.querySelector(".nexter");
const next2 = document.querySelector(".nexter2");
const next3 = document.querySelector(".nexter3");
const next4 = document.querySelector(".nexter4");
const next5 = document.querySelector(".nexter5");
const next6 = document.querySelector(".nexter6");
const barline = document.querySelector(".bar-line");
const check = document.querySelector(".fa-check");
// const input = document.querySelectorAll("textarea");
const list = document.querySelectorAll(".li");
const input = document.getElementById("name");
const vision = document.getElementById("vision");
const checkcircle = document.getElementById("check-circle");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const emailinv = document.getElementById("emailinv");
const phoneinv = document.getElementById("phoneinv");
const urlinv = document.getElementById("urlinv");
const empty = document.getElementById("empty");
const empty2 = document.getElementById("empty2");
const empty3 = document.getElementById("empty3");
const empty5 = document.getElementById("empty5");
const empty6 = document.getElementById("empty6");
const empty7 = document.getElementById("empty7");
const empty8 = document.getElementById("empty8");
const empty9 = document.getElementById("empty9");
const empty10 = document.getElementById("empty10");
const empty11 = document.getElementById("empty11");
const empty12 = document.getElementById("empty12");
const empty13 = document.getElementById("empty13");
const empty4 = document.getElementById("empty4");
const company = document.getElementById("company");
const project = document.getElementById("project");
const feedback = document.getElementById("feedback");
const url = document.getElementById("url");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const register = document.getElementById("register");
const address = document.getElementById("address");
const licence = document.getElementById("licence");
const registrationfiles = document.getElementById("registrationfiles");
const otherdocuments = document.getElementById("otherdocuments");
const span = document.querySelectorAll(".tab");
const tabpanel = document.querySelector(".panel");

// const tabpanel2 = document.querySelector(".panel2");


let currentstep = 0;
let clickable = 0;
if (currentstep = 0){
    previousButton.classList.add("d-none");
}
showpanel();
list.onclick = () =>{
    clicker();
}




next.onclick = () => {

 
    
    checkinput();
    valueincrease();
    showpanel();
    hidepanel();

   
    console.log(currentstep);

    
    

   
    // formonevalidation();
    // checkerror();
    
    //  colorchange();
     spanchange();
     
}
next2.onclick = () => {
    checkinput2();
    
    valueincrease2();
    showpanel();
    hidepanel();
    spanchange();
  
}
let ok = 0;
let mok = 0;
let tok = 0;
next3.onclick = () => {
   
    emailvalidate();
    phonevalidate();
    checkinput3();
    
    valueincrease3();
   
    showpanel();
    hidepanel();
    spanchange();
    
}
next4.onclick = () => {

    checkinput4();
    valueincrease4();
    showpanel();
    hidepanel();
    spanchange();
    
}
next5.onclick = () => {
    console.log(currentstep);
    // urlvalidate();
    checkinput5();
    valueincrease5();
    showpanel();
    hidepanel();
    spanchange();
   
}




previousButton.onclick = () => {
    

    hidepanel2();
    currentstep--;
    console.log(currentstep);
}

if(currentstep == 5){
    next.classList.add("d-none");
    
}

function clicker(){

    let x= 0;
    for(x=0; x<list.length; x++){

        list[x].onclick = () => {

            list[x].style.color = "blue";
        }
    }

    
}

console.log(currentstep);


function showpanel(){
   
        panel[currentstep].classList.remove("d-none");
    list[currentstep].style.color = "blue";
    
   
    
}
function showpanel2(){
    if (currentstep = 1){
        console.log(project.value);
        console.log(company.value);
    }

    
}
function checker(){
    if(project.value ==""){
        next.setAttribute('disabled', true);
    }
    else{
        next.removeAttribute('disabled');
    }
}
function hidepanel(){
    panel[currentstep-1].classList.add("d-none");
    list[currentstep-1].style.color = "black";
    
}
function hidepanel2(){
    
    panel[currentstep].classList.add("d-none");
    panel[currentstep-1].classList.remove("d-none");
    list[currentstep].style.color = "black";
    list[currentstep-1].style.color = "blue";
    
}
function hidepanel3(){
    panel[currentstep].classList.add("d-none");
    panel[currentstep-1].classList.remove("d-none");
}
function formonevalidation(){

    if (input.value == "" && vision.value == ""){
        empty.classList.remove("d-none");
        empty2.classList.remove("d-none");
        
    } 
}
function checkerror(){
    if (empty.className == ""){
        next.setAttribute('disabled' ,false);
    }

    else{
        next.setAttribute('disabled' ,true);
    }
}
function disablebutton(){
    if(input.value ==""){
        next.setAttribute('disabled' ,true);
    }
    else{
        next.setAttribute('disabled' ,false);
    }
}
function consolevalue(){


    console.log(input.value);
    console.log(vision.value);
}
function consolevalue2(){

    if (currentstep == 1){

        console.log(company.value);
    console.log(project.value);
    
    }
    
}

function checkinput(){
    if(input.value ==""){
        empty.classList.remove("d-none");
    }
    if(vision.value ==""){
        empty2.classList.remove("d-none");
    }
    if(input.value !==""){
        empty.classList.add("d-none");
    }
    if(vision.value !==""){
        empty2.classList.add("d-none");
    }
}
function checkinput2(){

    

        if(company.value ==""){
            empty3.classList.remove("d-none");
           
            
        }
        if(project.value == ""){
            empty4.classList.remove("d-none");
           
        }
        if(company.value != ""){
            empty3.classList.add("d-none");
           
        }
        if(project.value != ""){
            empty4.classList.add("d-none");
           
        }
       
      
     
            if(company.value !=="" && project.value !==""){
                empty3.classList.add("d-none");
                empty4.classList.add("d-none");
                currentstep +=1;
            }
 
}
function checkinput3(){

    

    if(email.value ==""){
        empty5.classList.remove("d-none");
        emailinv.classList.add("d-none");
       
        
    }
    if(phone.value == ""){
        empty6.classList.remove("d-none");
        phoneinv.classList.add("d-none");
       
    }
    if(register.value ==""){
        empty7.classList.remove("d-none");
       
        
    }   
    if(address.value == ""){
        empty8.classList.remove("d-none");
       
    }
   
    
   
    if(register.value !=""){
        empty7.classList.add("d-none");
       
        
    }
    if(address.value != ""){
        empty8.classList.add("d-none");
       
    }

    if( register.value !="" && address.value != "" && mok>1 && ok>1){
        empty5.classList.add("d-none");
        empty6.classList.add("d-none");
        empty7.classList.add("d-none");
        empty8.classList.add("d-none");
        currentstep +=1;
    }
    else{
        return false;
    }
}
function emailvalidate(){
    

    if(email.value ==""){
        empty5.classList.remove("d-none");
        emailinv.classList.add("d-none");
       
        
    }
    console.log(email.value)

    let emailregex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

     if (!emailregex.test(email.value)){

        emailinv.classList.remove("d-none");
        empty5.classList.add("d-none");
        ok = 1;

    }
    if(emailregex.test(email.value)){
        emailinv.classList.add("d-none");
        ok=2;
    }
}

function phonevalidate(){

    let ullu = 99;

    if(email.value ==""){
        empty5.classList.remove("d-none");
        emailinv.classList.add("d-none");
       
        
    }

 if(phone.value ==""){
    empty6.classList.remove("d-none");
    phoneinv.classList.add("d-none");
   
}

console.log(phone.value);
let phoneregex  = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
   
    if (!phoneregex.test(phone.value)){

        phoneinv.classList.remove("d-none");
        empty6.classList.add("d-none");
       mok =1;
       currentstep = 2;

    }
    if (phoneregex.test(phone.value)){
        phoneinv.classList.add("d-none");
        mok=2;
    }
    
}




function checkinput4(){

    if(licence.value ==""){
        empty9.classList.remove("d-none");
       
        
    }
    if(registrationfiles.value == ""){
        empty10.classList.remove("d-none");
       
    }
    if(otherdocuments.value ==""){
        empty11.classList.remove("d-none");
       
        
    }
    if(licence.value !=""){
        empty9.classList.add("d-none");
        label1.innerHTML =licence.value;
       
        
    }
    if(registrationfiles.value != ""){
        empty10.classList.add("d-none");
        label2.innerHTML = registrationfiles.value;
    }
    if(otherdocuments.value !=""){
        empty11.classList.add("d-none");
        label3.innerHTML = otherdocuments.value;
       
        
    }

    

}
function labelchange(){
    label1.innerHTML =licence.value;
    label1.style.color = "black";
}
function labelchange2(){
    label2.innerHTML = registrationfiles.value;
    label2.style.color = "black";
}
function labelchange3(){
    label3.innerHTML = otherdocuments.value;
    label3.style.color = "black";
}
function checkinput5(){



    if(feedback.value ==""){
        empty12.classList.remove("d-none");
       
        
    }
   
    if(feedback.value !=""){
        empty12.classList.add("d-none");
       
        
    }
    if(url.value != ""){
        empty13.classList.add("d-none");
       
    }

}
function urlvalidate(){

    let urlregex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;


    if(url.value = ""){
        empty13.classList.remove("d-none");
        urlinv.classList.add("d-none");
       
    }
    if (!urlregex.test(url.value)){

        urlinv.classList.remove("d-none");
        empty13.classList.add("d-none");
       tok =1;
       currentstep = 4;

    }
    if (urlregex.test(url.value)){
        urlinv.classList.add("d-none");
        tok=2;
    }
}

function valueincrease(){
    if(input.value !=="" && vision.value !==""){
        currentstep = 1;
        clickable =1;
       
    }
    if(input.value =="" || vision.value ==""){
        currentstep =0;
    }
    if(clickable =1){
        list[0].onclick = ()  => {
            console.log(currentstep)
        panel[0].classList.remove("d-none");
    panel[1].classList.add("d-none");
    panel[2].classList.add("d-none");
    panel[3].classList.add("d-none");
    panel[4].classList.add("d-none");
    }
    
    }
    
}
function valueincrease2(){

    
        if(company.value !=="" && project.value !==""){
            currentstep =2;
            clickable = 2;
        }
        if(company.value =="" || project.value ==""){
            currentstep =1;
        }
        console.log(currentstep);

        if(clickable =2){
            list[1].onclick = ()  => {
                console.log(currentstep)
            panel[1].classList.remove("d-none");
        panel[0].classList.add("d-none");
        panel[2].classList.add("d-none");
        panel[3].classList.add("d-none");
        panel[4].classList.add("d-none");
        }
        
        }
    
    
}
function valueincrease3(){

    if(email.value !=="" && phone.value !=="" && register.value !="" && address.value != "" && ok>1 &&mok>1){
        currentstep =3;
        clickable = 3;
    }
    if(email.value =="" || phone.value =="" || register.value =="" || address.value == ""){
        currentstep =2;
    }
    console.log(currentstep);

    if(clickable =3){
        list[2].onclick = ()  => {
            console.log(currentstep)
        panel[2].classList.remove("d-none");
    panel[0].classList.add("d-none");
    panel[1].classList.add("d-none");
    panel[3].classList.add("d-none");
    panel[4].classList.add("d-none");
    }
    }

}
function valueincrease4(){

    if(licence.value !="" && registrationfiles.value != "" && otherdocuments.value !="" ){
        
        currentstep =4;
        clickable = 4;
    }
    if(licence.value =="" || registrationfiles.value == "" || otherdocuments.value ==""){
        currentstep =3;
    }
    if(clickable =4){
        list[3].onclick = ()  => {
            console.log(currentstep)
        panel[3].classList.remove("d-none");
    panel[0].classList.add("d-none");
    panel[1].classList.add("d-none");
    panel[2].classList.add("d-none");
    panel[4].classList.add("d-none");
    }
    
    }
}
function valueincrease5(){

    if(feedback.value !="" && url.value !="")
{
    currentstep++;
    clickable = 5;
}
if(feedback.value =="" || url.value =="")
{
    currentstep =4;
}
if(clickable =5){
    list[4].onclick = ()  => {
        console.log(currentstep)
    panel[4].classList.remove("d-none");
panel[0].classList.add("d-none");
panel[1].classList.add("d-none");
panel[3].classList.add("d-none");
panel[2].classList.add("d-none");
}

}
}
function spanchange(){
    span[currentstep-1].innerHTML = `<i class="fas fa-check"></i>`;
    span[currentstep-1].style.color = "white";
    span[currentstep-1].style.backgroundColor = "green";
    span[currentstep-1].style.paddingTop = "11px";
}
function meterchange(){

    checkcircle[currentstep-1].innerHTML = `<i class="fas fa-check"></i>`;
    barline[currentstep-1].style.backgroundColor = "green";
    check[currentstep-1].style.backgroundColor = "green";
}











if(clickable ==4){
    list[3].onclick = ()  => {
    panel[3].classList.remove("d-none");
panel[0].classList.add("d-none");
panel[1].classList.add("d-none");
panel[2].classList.add("d-none");
panel[4].classList.add("d-none");
}

}


if(clickable ==5){
    list[4].onclick = ()  => {
    panel[4].classList.remove("d-none");
panel[0].classList.add("d-none");
panel[1].classList.add("d-none");
panel[3].classList.add("d-none");
panel[2].classList.add("d-none");
}

}
//  function colorchange(){
//      switch (currentstep) {
//      case 0:
//         list[0].style.color = "blue";
       
//             case 1:
//                 list[0].style.color = "black";
                
//                 case 2:
//             list[2].style.color = "blue";
            
//             case 3:
//             list[3].style.color = "blue";
            

//         default:
//             list[3].style.color = "black";
//     }}
    
    
// }
// function colornotchange(){

// }

function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
         checkboxes.forEach((item) => {
             if (item !== checkbox) item.checked = false
         })
     }

     


// nextButton.onclick = () => {

//     // tabpanel.classList.add("d-none");
//     // tabpanel2.classList.remove("d-none");
// }

// previousButton.onclick = () => {

//     // tabpanel2.classList.add("d-none");
//     // tabpanel.classList.remove("d-none");
// }


   
// function set(){
//     if (input.vasqlue !="") {
//         nextButton.setAttribute('disabled', true)
        
//       } else {
//         nextButton.setAttribute('disabled', false);
        
//       }
// }
   
// set();
// if (input.value !=="") {
//     nextButton.setAttribute('disabled', false)
// }
// if (input.value === "oo") {
//     nextButton.setAttribute('disabled', true)
// }



   



 
    
  

 
// let form1 = document.querySelector(".form-1");
// let form2 = document.querySelector(".form-2");
// let form3 = document.querySelector(".form-3");
// let form4 = document.querySelector(".form-4");
// let form5 = document.querySelector(".form-5");
// let form6 = document.querySelector(".form-6");
// let nextBtn = document.querySelector(".sign-button");
// let prevBtn = document.querySelector(".prev-button");
// let nextBtn2 = document.querySelector(".next-button");
// let prevBtn2 = document.querySelector(".prev-button2");
// let nextBtn3 = document.querySelector(".next-button2");
// let prevBtn3 = document.querySelector(".prev-button3");
// let nextBtn4 = document.querySelector(".next-button3");
// let prevBtn4 = document.querySelector(".prev-button4");
// let subBtn = document.querySelector(".submit-button");
// let errorMsg = document.getElementById("span");
// let input = document.querySelector(".inputs");



// // if(hasError = false){
// //     errorMsg.style.display = "none";
// // }
// // if(hasError = true){
// //     errorMsg.style.display = "block";
// // }


// // hasError = false;

    
//     if(input.value == null){
//         errorMsg.innerHTML = "invalid";
//     }
    
    




// nextBtn.onclick  = () => {
//     form2.classList.remove("no-display");
//     form1.classList.add("no-display");
    
// }




// prevBtn.onclick  = () => {
//     form1.classList.remove("no-display");
//     form2.classList.add("no-display");
    
    
// }

// nextBtn2.onclick  = () => {
//     form3.classList.remove("no-display");
//     form2.classList.add("no-display");   
// }
// prevBtn2.onclick  = () => {
//     form3.classList.add("no-display");
//     form2.classList.remove("no-display");   
// }
// nextBtn3.onclick  = () => {
//     form4.classList.remove("no-display");
//     form3.classList.add("no-display");   
// }
// prevBtn3.onclick  = () => {
//     form4.classList.add("no-display");
//     form3.classList.remove("no-display");   
// }
// nextBtn4.onclick  = () => {
//     form5.classList.remove("no-display");
//     form4.classList.add("no-display");   
// }
// prevBtn4.onclick  = () => {
//     form5.classList.add("no-display");
//     form4.classList.remove("no-display");   
// }
// subBtn.onclick  = () => {
//     form5.classList.add("no-display");
//     form6.classList.remove("no-display");   
// }


// function onlyOne(checkbox) {
//     var checkboxes = document.getElementsByName('check')
//     checkboxes.forEach((item) => {
//         if (item !== checkbox) item.checked = false
//     })
// }























