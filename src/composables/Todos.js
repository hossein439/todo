import { toRaw } from "vue";
import Sawl from 'sweetalert2';
export default class Todos {
    constructor() {
        this.todos = JSON.parse(localStorage.getItem('todos'));
    }

    createTask(task) {
        const makeRegularObj = toRaw(task);
        this.todos.push(makeRegularObj);
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }   

    getTask(id) {
        return this.todos.find(item => item.id === id);
    }

    updateTask(task) {
        const taskUpdatedIndex = this.todos.findIndex(item => item.id === task.id);
        const newTask = {
            id: task.id,
            description: task.description,
            completed: task.completed,
        }
        this.todos.splice(taskUpdatedIndex, 1, newTask);
        localStorage.setItem('todos', JSON.stringify(this.todos));
        Sawl.fire({
            title: 'done',
            icon: 'success'
        }).then(()=>{
            window.location.reload();
        })
    }

    deleteTask(id) {
        console.log(id);
        const taskUpdatedIndex = this.todos.findIndex(item => item.id === id);
        this.todos.splice(taskUpdatedIndex, 1);
        localStorage.setItem('todos', JSON.stringify(this.todos));
        Sawl.fire({
            title: 'done',
            icon: 'success'
        }).then(() => {
            window.location.reload();
        })
    }

    completedTask() {
        return this.todos.filter(item => item.completed === true);
    }

    uncompletedTask() {
        return this.todos.filter(item => item.completed === false);
    }
}