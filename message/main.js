const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('.messageout');
const submitBtn = document.querySelector('#submitBtn');
const haveToDo = document.querySelector('#haveToDo');
const messageout = document.querySelector('.messageout');
const messageout2 = document.querySelector('.messageout2');
sendBtn.addEventListener('click', sendMsg);
submitBtn.addEventListener('submit', sengMsg2);

function sendMsg() {
    let content = messageIn.value;

    if (content === '') {
        alert('Empty')
    } else {
        console.log(content);
        messageOut.innerHTML = content;
        messageIn.value = '';
    }

}

function sengMsg2(event) {
    event.preventDefault();
    let content = haveToDo.value;
    console.log(content);
    messageout2.innerHTML = content;
    haveToDo.value = ''
}