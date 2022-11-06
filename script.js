const questionBtn = document.getElementsByClassName('select');
const arrow = document.querySelectorAll('.arrow');
const question = document.querySelectorAll('.question');
const answer = document.getElementsByClassName('answer');

for (let i = 0; i < questionBtn.length; i++) {
    questionBtn[i].addEventListener('click', () => {
        closeAll();
        openQuestion(i);

    });
}

function openQuestion(i) {
    arrow[i].style.transform = "rotateX(180deg)";
    question[i].style.fontWeight = "700";
    answer[i].style.maxHeight = "10em";
    answer[i].style.opacity = "1";
}

function closeAll() {
    for (let i = 0; i < questionBtn.length; i++) {
        arrow[i].style.transform = "rotateX(0deg)";
        question[i].style.fontWeight = "500";
        answer[i].style.maxHeight = "0px";
        answer[i].style.opacity = "0";
    }
}

window.onload = function () {
    if(screen.width >= 800) {
        document.getElementById('woman').src = "/images/illustration-woman-online-desktop.svg";
        document.getElementById('shadow').src = "/images/bg-pattern-desktop.svg";
    } else {
        document.getElementById('woman').src = "/images/illustration-woman-online-mobile.svg";
        document.getElementById('shadow').src = "/images/bg-pattern-mobile.svg";
    }
}