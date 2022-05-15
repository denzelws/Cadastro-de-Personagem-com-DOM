function saveCharacter(){
  
    let character = document.querySelector("input[name='name']").value
    let classs = document.querySelector("input[name='class']").value
    let resource = document.querySelector("input[name='resource']").value
    let exp = document.querySelector("input[name='exp']").value
    
    let newList = document.createElement("li")
    newList.innerText = "Personagem: " + character + " | Classe: " + classs +
                                   " | Recurso: " + resource + " | Experiência: " + exp
   
    document.getElementById("players-list").appendChild(newList)
     
     let removeButton = document.createElement("button")
     removeButton.type = "button"
     removeButton.innerText = "Remover"
     removeButton.setAttribute("onclick","removeCharacter(this)")
     newList.appendChild(removeButton)

}

function removeCharacter(button){

    let liRemove = button.parentNode
    document.getElementById("players-list").removeChild(liRemove)

}