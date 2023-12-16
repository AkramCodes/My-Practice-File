function addTask(){
    let input = document.querySelector("#task") //single element
    let value = input.value //value of the user's input

    if(value==''){
        alert('Enter the task name to add ')
        return 
    }

    //console.log
    //console.warn
    //console.info
    //console.error
    // console.log(value)
    /*
    <li class='task-list-item'>
                <span>${value}</span>
                <button onclick="removeTask(this)">X</button>
            </li>
    */

   let li = document.createElement("li")
   let span = document.createElement("span")
   let button = document.createElement("button")
   //<li></li>, <span></span>, <button></button>

   li.classList.add("task-list-item")
   span.innerText = value
   button.innerText = 'X'
   button.setAttribute("onclick","removeTask(this)")
   li.append(span)
   li.append(button)

   let list = document.querySelector(".task-list")
    
   list.append(li)

    input.value = ''
}   


function removeTask(btn){
    console.log('remvoved')
    //
    btn.parentNode.remove()
}

