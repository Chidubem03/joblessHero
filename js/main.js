const menuBtn = document.querySelector('.menu_btn');
const hamBurger = document.querySelector('.menu_btn-burger');
const nav= document.querySelector('.menu');
const menuNav= document.querySelector('.menu_items');
const navItems= document.querySelectorAll('.menu_items-link');
const signUp= document.querySelector('.b1');
const modal= document.querySelector('.modal');
const outsideBox= document.querySelector('.outside');
const signupBtn= document.querySelector('[signup]');
const myName= document.querySelector('[myname]');
const myPassword= document.querySelector('[mypassword]');
const myEmail= document.querySelector('[myemail]');
const mySecondPassword= document.querySelector('[secondpassword]');
const myHeader= document.querySelector('.start');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
function toggleMenu(){
    if(!showMenu){
        hamBurger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item=> item.classList.add('open'));

        showMenu= true;
    }else{
        hamBurger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item=> item.classList.remove('open'));

        showMenu= false;
    }
}
signUp.addEventListener('click', function(){
    modal.style.display = "flex";
    menuNav.classList.remove('open');
    myHeader.style.display = "none";
})
outsideBox.addEventListener('click', function(){
    modal.style.display = "none";
    menuNav.classList.add('open');
    myHeader.style.display = "flex";
})
signupBtn.addEventListener('click', function(){
    if(myName.value == ""){
    return false;
    }else if(myEmail.value == ""){
    return false;
    }else if(myPassword.value == ""){
        return false;
    }else if(mySecondPassword.value == ""){
        return false;
    }else{
        alert("Your Name is " + myName.value);
    alert("Your Email is " + myEmail.value);
    alert("Your Password is " + myPassword.value);
    }
});
signupBtn.addEventListener('click', validateForm);
function validateForm() {
    if(myPassword.value !== mySecondPassword.value){
        window.alert("Password do not match!");
    }else if(typeof myName.value !== string){
        window.alert("please re-enter your name");
    }
};
document.addEventListener('keydown', (e)=>{
    if(event.key === "Escape"){
        modal.style.display = "none";
         myHeader.style.display = "flex";
        menuNav.classList.add('open');
    }
});