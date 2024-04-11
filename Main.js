let tasks = []; // Array of tasks => [{title:"Create todo",desc: "create todo using javascript",date: "25-08-2023",time: "5:38"}]
let form = document.getElementById("task-form"); //declaring
const content=document.getElementById("tasks")
console.log("R.A.S");




form.addEventListener("submit", function (e) {
    //todo
    // 1-prevent default form submission
    // get form values
    // validate form
    //create an object of task with a unique id
    // add object to list of tasks
    // call a function to display task
    e.preventDefault();

    const taskName = form.task_name.value;
    const taskDesc = form.description.value;
    const date = form.date.value;
    const time = form.time.value;
    const index=form.todoId.value;
    const priority = form.priority.value;
    const task = {
        id: taskName.toLowerCase().replace(" ", "-"),
        taskName: taskName,
        taskDesc: taskDesc,
        date: date,
        time: time,
        priority: priority
    }

    tasks.push();
    tasks.sort((a,b) => {
        if(a.priority > b.priority){
            return 1;
        } else if (b.priority > a.priority){
            return -1;
        } else {
            return 0;
        }
    });

    // Validation
    // Title validation
  let hasError=false;
  if (taskName==''){

    document.getElementById('name-error').innerHTML="Task name is required";
    hasError=true
  }
  else{
    document.getElementById('name-error').innerHTML="";
  }

    // description validation
  if (taskName==''){

    document.getElementById('description-error').innerHTML="Task description is required";
    hasError=true
  }
  else{
    document.getElementById('description-error').innerHTML="";
  }
    // if(tasknameValue==='') {
    //     setError(tasknameValue, 'Task Name is required');
    // } else {
    //     setSuccess(tasknameValue);
    // }

    // if(taskDesc === '') {
    //     setError(taskDesc, 'A description is required');
    // }


      if (index) {
           tasks=tasks.map((x)=>{
              if(x.id==index){
                   x.taskName=taskName;
                   x.taskDesc=taskDesc;
                   x.priority=priority;
                  x.date=date;
                   x.time=time;

               }  return x;
           });
       } else{
           tasks.unshift(task);       }

    // tasks.push(task);
    form.reset();
    displayTasks(tasks); // function call
    const strArr=JSON.stringify(tasks);
    localStorage.setItem('tasks', strArr);
});

if(localStorage.getItem('tasks')) {
    let strArr=localStorage.getItem('tasks');
    tasks=JSON.parse(strArr)
}


function displayTasks(listOfTasks) { // listOfTasks = tasks
    //todo
    //create html variable to store the html contents
    //loop through task to create html content
    //override html content of task wrapper with generated html;

    let html = "";
    html += `            
    <div class="list-of-tasks">`;
    for (let i = 0; i < listOfTasks.length; i++) {
        html += `<div class="task">
        <div class="task-header">
            <h5 class="task-title m-0">${listOfTasks[i].taskName}</h5>
            <div class="task-desc">${listOfTasks[i].taskDesc}</div>
            <div class="priority">${listOfTasks[i].priority} </div>           
            <div class="date-wrapper">
                <span>${listOfTasks[i].date}:</span>
                <span>${listOfTasks[i].time}</span>
            </div>
        </div>
        
        <hr>
        <div class="task-footer actions">
            <button class="edit" type="botton" task-id="${listOfTasks[i].id}"><i></i>Edit</button>
            <button class="delete" type="botton" task-id="${listOfTasks[i].id}"><i></i>Delete</button>
        </div>
    </div>`;
    }
    html += `</div>`;

    // document.getElementById("tasks").innerHTML = html;
    content.innerHTML = html;
      
}

content.addEventListener("click", e=>{
    if(e.target.classList.contains('delete')){
        const index=e.target.getAttribute('task-id');
        tasks=tasks.filter((x)=>x.id!=index);
        localStorage.setItem('tasks',JSON.stringify(tasks));
        displayTasks(tasks);
    }
    if(e.target.classList.contains('edit')){
        const index=e.target.getAttribute('task-id');
        const x=tasks.find((listOfTasks)=>listOfTasks.id==index);
        form.task_name.value=x.taskName;
        form.description.value=x.taskDesc;
        form.date.value=x.date;  
        form.time.value=x.time;
        form.todoId.value=index; 
    }
})

//     validateInputs();

//     const validateInputs = () => {
//         const tasknameValue = taskname.value.trim();
//   }

//     const setError = (element,message) => {
//         const inputcontrol = element.parentElement;
//         const errorDisplay = inputcontrol.querySelector('.error');

//         errorDisplay.innerText = message;
//         inputcontrol.classList.add('error');
//         inputcontrol.classList.remove('success')
//     }

//     const setSuccess = element => {
//         const inputcontrol = element.parentElement;
//         const errorDisplay = inputcontrol.querySelector('.error');

//         errorDisplay.innerText ='';
//         inputcontrol.classList.add('success');
//         inputcontrol.classList.remove('error');
//     };
