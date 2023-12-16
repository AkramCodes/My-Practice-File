
function AddTask() {
    
    // + document.querySelector('#DateTime').value


    // console.log("%%%%%%%",document.querySelector('#DateTime').value)
    let dateTime = document.querySelector('#DateTime')

    let Isha = document.querySelector('#task');

    let input = Isha.value + dateTime.value
    if (input == '') {
        alert('Enter Your Task')
        return
    }

    // if(dateTime == ''){
    //     alert('Enter your date')
    //     return
    // }


    // element creation ------------------------------

    let li = document.createElement("li");
    let span = document.createElement("span")

    let button = document.createElement("button")

    li.classList.add("List-item")
    span.innerText = input

    button.innerText = 'X'
    button.setAttribute("onclick", "removeTask(this)")
    li.append(span)

    li.append(button)
    let list = document.querySelector(".taskList")
    list.append(li)

    Isha.value = '';




    // console.log(input)

}

function removeTask(btn) {



    btn.parentNode.remove()

}