const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", () => {
    createPassword();
});

copyIconEl.addEventListener("click", () => {
    copyPassword();
    if(inputEl.value){
        alertContainerEl.classList.remove("active");
        setTimeout(()=>{
            alertContainerEl.classList.add("active");
        },2000);
    }
});

function createPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 12;
    let password = "";

    for(let i = 0; i < passwordLength; i++){
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum,randomNum+1);
    }
    inputEl.value = password;
    alertContainerEl.innerText = "Password Copied";
 }

 function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEl.value);
 }