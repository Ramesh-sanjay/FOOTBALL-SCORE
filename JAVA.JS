let homeEl =document.getElementById('home-container')
let guestEl=document.getElementById('guest-container')
let homeCountEl=0
let guestCountEl=0

function homeIncrementFunction(homeElValue){
    homeCountEl += homeElValue
    homeEl.textContent=homeCountEl
}
function guestIncrementFunction(guestElValue){
    guestCountEl += guestElValue
    guestEl.textContent=guestCountEl 
}
function clearHomeEl(){
    homeCountEl =0
    homeEl.textContent=homeCountEl
}
function ClearGuest(){
    guestCountEl=0 
    guestEl.textContent=guestCountEl

}
