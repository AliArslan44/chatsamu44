import { db } from '../firebase/firebase.js';
import { getDatabase, ref, onValue, update } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-database.js";
let btn = document.getElementById("btn");
let mesaj = document.getElementById("mesaj")
let mesajarea = document.getElementById("messagedom");
function renderMessage() {
    let pList = [];
    
    onValue(ref(db, 'timezonemessage/'), (snapshot) => {
       
        
         Object.entries(snapshot.val())
       
        
        for (let i = 0; i <Object.entries(snapshot.val()).length; i++) {
             console.log("value:",Object.entries(snapshot.val())[i][1].message)
            if (mesajarea.children.length < Object.entries(snapshot.val()).length) {
                pList[i] = document.createElement("p");
                pList[i].innerHTML = Object.entries(snapshot.val())[i][1].message;
                mesajarea.appendChild(pList[i])
            }

        }
    })
}
renderMessage();
btn.addEventListener("click", () => {
    mesajarea.innerHTML = " ";

    
    let time = new Date().getTime();
    console.log(time);
    if (mesaj.value != null && mesaj.value != " ") {
        update(ref(db, `timezonemessage/${time}/`), {
            message: mesaj.value
        })

    }

})