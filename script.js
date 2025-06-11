uncompleted_tasks=[]
completed_tasks=[]
task_count=0
document.getElementById("newtaskform").addEventListener("submit",function(event){
    event.preventDefault()
    task = document.getElementById("newTask").value
    if (task != ""){
        uncompleted_tasks.push(task)
        document.getElementById("newTask").value = ""
        sect = document.getElementById("uncompleted-tasks")
        element = `<div id="taskdiv"><input type="checkbox" name="task" class="task-box" id="task${task_count}" value="${task}"><label for="task${task_count}">${task}</label></div>`
        sect.insertAdjacentHTML("beforeend",element)
        checkbox=document.getElementById(`task${task_count}`)
        document.getElementById("add-box").checked=false
        checkbox.addEventListener("change",function(){
            if(this.checked){
                this.parentElement.remove()
                const index = uncompleted_tasks.indexOf(this.value);
                if (index > -1) {
                    uncompleted_tasks.splice(index, 1);
                }
                task = this.value

                completed_tasks.push(task)
                ele = `<div id="comp_taskdiv"><input type="checkbox" name="task" class="task-box" id="untask${task_count}" value="${task}" checked><label for="untask${task_count}">${task}</label></div>`
                document.getElementById("completed-tasks").insertAdjacentHTML("beforeend",ele)
                document.getElementById(`untask${task_count}`).addEventListener("change",function(){
                    this.checked=true
                })
            }
        })
        task_count++
    }
})
const today = new Date();
const dateOnly = today.toLocaleDateString(); 
document.getElementById("heading").innerHTML="Things To-do: "+dateOnly

    


