let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/show.jpg') {
        myImage.setAttribute('src', 'images/show2.jpg');
    } else {
        myImage.setAttribute('src', 'images/show.jpg');
    }
}

myButton.onclick = function () {
    setUserName();
}

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

