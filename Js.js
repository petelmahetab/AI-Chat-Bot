// Get the ELEMENTs

let prompt=document.querySelector('#input');
let chatCOntainer=document.querySelector('.chat-container')
let Submit=document.querySelector('#circle');
prompt.addEventListener('keydown',(e)=>{
   if(e.key==='Enter'){
    //    After entering the Key 
    handleChatResponse(prompt.value)
   }

})

// It handle the response from 
function handleChatResponse(mes){
    let html=`  <img src="UI.png" alt="User" width="30" id="ui"> 
    <div class="user-chat-area">
    ${mes}
    </div>`
prompt.value="";
    let userChatBox=createChatbox(html,'user-chat-box')

    chatCOntainer.appendChild(userChatBox);

    setTimeout(()=>{
        let html=` <img src="ChatBot.png" alt="AIBot" width="40" id="bot">
        <div class="ai-chat-area"></div>
`
   let AIchatContainer=createAiCHAtCOntainer(html,'ai-chat-box');
   chatCOntainer.appendChild(AIchatContainer);
    },300)
}
// For creating Chatbox of USer from JS
function createChatbox(html,className){
    let div=document.createElement('div');
    div.innerHTML=html;
    div.classList.add(className)
    return div

}

// For creating AI chatbot
function createAiCHAtCOntainer(html,className){
    let div=document.createElement('div');
    div.innerHTML=html;
    div.classList.add(className);
    return div;
}