
const password = document.querySelector("#password")
const btnShowPassword = document.querySelector("#btnPassword")
const PASSWORDTYPE = 'password'
const TEXTTYPE = 'text'
btnShowPassword.addEventListener("click", () =>{
    console.log(password.type);
   if(password.type == 'password'){
       password.type = 'text'
   }
   else{
       password.type = 'password'
   }
})

const loginForm = document.querySelector("#form_login")
const forgotForm = document.querySelector("#forgot_pw")
const btn_forgot = document.querySelector("#forgot")
const btnCloseModal = document.querySelector("#closeModal")

btn_forgot.addEventListener('click' , () =>{
   loginForm.classList.toggle('formHidden')
})

btnCloseModal.addEventListener("click" , () =>{
    loginForm.classList.remove('formHidden')
})

