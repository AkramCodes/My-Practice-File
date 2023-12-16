
// function AddTask() {





//     let dateTime = document.querySelector('#DateTime')

//     let Isha = document.querySelector('#task');

//     let input = Isha.value + dateTime.value
//     if (input == '') {
//         alert('Enter Your Task')
//         return
//     }

//     // if(dateTime == ''){
//     //     alert('Enter your date')
//     //     return
//     // }


//     // element creation ------------------------------

//     let li = document.createElement("li");
//     let span = document.createElement("span")


//     let button = document.createElement("button")

//     li.classList.add("List-item")
//     span.innerText = input

//     button.innerText = 'X'
//     button.setAttribute("onclick", "removeTask(this)")
//     li.append(span)

//     li.append(button)
//     let list = document.querySelector(".taskList")
//     list.append(li)

//     Isha.value = '';




//     // console.log(input)

// }

// function removeTask(btn) {



//     btn.parentNode.remove()

// }






function Addtask(){

    let AddTask = document.querySelector("#addTask")
    let Date = document.querySelector('#Date')
    let storeValue = AddTask.value 
    let DateValue = Date.value
    if(storeValue == ""){
        alert("Enter Your Task")
        return
    }

    if(Date == ""){
        alert("Enter Your Date")
        return
    }




    // Element Creation--------------------------------------------
     
    let li = document.createElement("li")
    let span = document.createElement("span")
    let button = document.createElement("span")
    let span2 = document.createElement("span")
     
    li.classList.add("list-item")
    span.innerText = storeValue
  
    span2.innerText = DateValue
    span2.classList.add("span2")
    button.innerText = 'X'
    button.classList.add("thisbtn")


    button.setAttribute("onclick", "removeTask(this)" )
    
    li.append(span)
    li.append(span2)
    li.append(button)
    let list = document.querySelector('#TaskList')
    list.append(li)



    storeValue.value = ""
    Date.value = ""




  


}

function removeTask(btn){

    console.log()
    
    btn.parentNode.remove();

}