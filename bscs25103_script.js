function Welcome(){
    alert("Welcome to Gamify")
}
document.getElementById("date").innerHTML = new Date().getFullYear();

function getstock (id){
    let check= document.getElementById(id).textContent;
    if (check. includes('In Stock'))
    {
        alert ("Item is Available");
    }
    else{
         alert("Item is not Availale")
    }
}

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('Form');
    const inputs = form.querySelectorAll('input[required]');

    let allFilled = false;
  if (allFilled) {
      alert('Please fill in all fields!');
      form.submit();
    }
}
)

const inputField = document.getElementById("input");
const chatlog = document.getElementById("chat-log");

function SendMessage(){
    let input = inputField.value.toLocaleLowerCase();
    let usermsg = document.createElement("p");
    userMsg.classList.add('user-msg')
    userMsg.textContent = input;

    chatlog.appendChild(userMsg)

    Botresponse(input);
}

function Botresponse(input){
    if(input.includes("hello") || input.includes("hi")){
        let botMsg = document.createElement("p");
        botMsg.classList.add('bot-msg')
        botMsg.textContent = "Hello ! how can i help you";
        chatlog.appendChild(botMsg);
    }
    else if(input.includes("product") || input.includes("sell")){
        let botMsg = document.createElement("p");
        botMsg.classList.add('bot-msg')
        botMsg.textContent = "We sell gaming consoles";
        chatlog.appendChild(botMsg);
    }
}


