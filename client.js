
const socket = io("http://localhost:7000")

const name = prompt("Enter your name please")
const form = document.getElementById("send-container")
socket.emit("new user joined",name)
const containerBox = document.querySelector(".container")
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const messgeBody = messegeBox.value;
    socket.emit("send",messgeBody)
    append(messgeBody, "right")
    messegeBox.value = ""

})

socket.on("receive", (messege)=>{
    append(messege.msg,"left")
})

function append(data, position){
    const joiningNotice = document.createElement("blockquote")
    joiningNotice.classList.add("messege")
    joiningNotice.classList.add(position)
    joiningNotice.innerHTML = data
    containerBox.append(joiningNotice)
}

const messegeBox=document.getElementById("messegeInput")
socket.on("user joined",(userName)=>{
  append(`${userName} joined`, "left")

})
