const loaderDiv = document.querySelector(".loader-div");
const loader = document.querySelector(".loader");
const logo = document.querySelector(".logo-div");
const closeBtn = document.querySelector(".close-btn");
const addTaskDiv = document.querySelector(".add-task-div");
const addTaskBtn = document.querySelector(".done-button");
const addTodoBtn = document.querySelector(".add-todo-button-div");
const hoverIcon = document.querySelector(".hover-icon");


//==============App Inputs=============================//
const taskInput = document.querySelector(".task-input");
const hourInput = document.querySelector("#hour");
const minInput = document.querySelector("#min");
const secInput = document.querySelector("#zone");
const dayInput = document.querySelector("#day");
const monutInput = document.querySelector("#mount");
const yearInput = document.querySelector("#year");


//=============App pages=====================//
const page2 = document.querySelector(".page2");
const todoContainer = document.querySelector(".todo-item-container");




//================Page Transition===================//
let loaderWidth = 0;
    window.addEventListener("load", () => {
    const random = Math.floor(Math.random()*40);
    const randomTime = Math.floor(Math.random()*500);
    let x = setInterval(() => {
      let load =  loaderWidth += random;
      loader.style.width = loaderWidth+'px';
        console.log(loaderWidth)
        if(load >= 184) {
            clearInterval(x)
            setTimeout(() => {
                logo.classList.add("bounce")
                setTimeout(() => {
                    loaderDiv.style.opacity = '0';
                    logo.style.opacity = '0';
                    setTimeout(() => {
                        loaderDiv.style.display = 'none';
                        logo.style.display = 'none';

                        page2.style.display = "block";
                        setTimeout(() => {
                            page2.style.opacity = "1";
                        }, 100);
                    }, 500);
                }, 1500);
            }, 200);
        }
    }, randomTime);
});


//===============Butons Events=============///
closeBtn.addEventListener("click", () => {
    // addTaskDiv.style.display = "none";
    
    addTaskDiv.style.top = "150px";
    setTimeout(() => {
        addTaskDiv.style.opacity = "0";
        setTimeout(() => {
            addTaskDiv.style.display = "none"
        }, 500);
    }, 100);
})

addTodoBtn.addEventListener("click", () => {
    hoverIcon.style.opacity = "0";

    setTimeout(() => {
        hoverIcon.style.display = "none";
    }, 100);

    
    addTaskDiv.style.display = "flex";
    setTimeout(() => {
        addTaskDiv.style.top = "80px";
        addTaskDiv.style.opacity = "1";
        
    }, 200);
})

addTaskBtn.addEventListener('click', () => {
    //================Todo container===============//
    const todoDiv = document.createElement("div");
    const timeDateContainer = document.createElement("div");
    const timeContainer = document.createElement("div");
    const dateContainer = document.createElement("div");
    const todoText = document.createElement("h5");
    const cancleContainer = document.createElement("div");

    const time = document.createElement("span");
    const am = document.createElement("span");
    const date = document.createElement("span");

    timeContainer.appendChild(time);
    time.classList.add("time-divspan");
    dateContainer.appendChild(am);
    dateContainer.appendChild(date);


    todoText.innerHTML = taskInput.value;
    time.innerHTML = hourInput.value+" : "+minInput.value;
    am.innerHTML = secInput.value;
    date.innerHTML = `${dayInput.value}/${monutInput.value}/${yearInput.value}`;

    taskInput.value = "";
    hourInput.value = "";
    minInput.value = "";
    secInput.value = "";
    dayInput.value = "";
    monutInput.value = "";
    yearInput.value = "";


    todoContainer.appendChild(todoDiv);
    todoDiv.classList.add("todo-item");

    todoDiv.appendChild(timeDateContainer);
    timeDateContainer.classList.add("time-and-date-container");

    todoDiv.appendChild(todoText);
    todoText.classList.add("todo-task");

    todoDiv.appendChild(cancleContainer);
    cancleContainer.classList.add("cancle-task");

    timeDateContainer.appendChild(timeContainer);
    timeContainer.classList.add("time-div")

    timeDateContainer.appendChild(dateContainer);
    dateContainer.classList.add("date-div")
    
    addTaskDiv.style.display = "none";

    todoDiv.addEventListener("dblclick", () => {
        todoDiv.style.display = "none";
    });



    const closeBtnRed = '../images/close_red.png';
    const greenTickBtn = '../images/green-tick.png';

    const cancleImg = document.createElement("img");
    cancleImg.src = closeBtnRed;
   
    cancleContainer.addEventListener("click", () => {
            cancleImg.setAttribute("src", greenTickBtn);
            cancleContainer.appendChild(cancleImg);
            cancleImg.classList.add("green-tick-images")
    });

    todoText.addEventListener("click", () => {
        todoText.classList.add("cancle")
    })
});