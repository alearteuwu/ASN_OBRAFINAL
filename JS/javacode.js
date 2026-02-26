//Track the toggle state
let isActive = false;

//Get elements 
const box = document.getElementById('bgmenu')
 const btn = document.getElementById('flecha')

 //Click event
 btn.addEventListener('click', function () {
    if (!isActive) {
        //first click action
        document.getElementById('bgmenu').style.display = "none"
    } else {
        //second click reverses the action
        document.getElementById('bgmenu').style.display = "block"
    }

    //flip the state
    isActive = !isActive;
 });