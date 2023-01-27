<template>
    <div class="flex justify-center items-center h-[400px]">
        <div class="flex flex-col justify-center items-center w-[350px] py-6 px-4 relative rounded-lg bg-[#363636]">
            <form @submit.prevent="addTask($event)" class="flex flex-col items-start">
                <label class="flex flex-col font-medium capitalize w-full text-white mt-3" for="">
                    Description
                    <input class="focus:outline-none my-1 p-2 text-white border-[#979797] bg-[#363636] border rounded"
                        v-model="task.description" type="text">
                </label>
                <div class="flex flex-col items-center justify-between mt-4">
                        <span class="text-white">Completed</span>
                        <label for="default-toggle" class="flex my-1 w-full relative items-center cursor-pointer">

                            <input type="checkbox" value="" id="default-toggle" class="sr-only peer"
                                v-model="task.completed">
                            <div
                                class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600">
                            </div>
                        </label>
                    </div>
                <div class="flex justify-end w-full mt-5">
                    <button
                        class="text-[#8687E7] rounded-md border border-[#8687E7] font-medium py-1 px-4 ">Create</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script setup>
import { reactive } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import Todos from '@/composables/Todos';
import Sawl from 'sweetalert2';

const todos = new Todos();

const task = reactive({
    id: uuidv4(),
    description: '',
    completed: true
});

function addTask() {
    todos.createTask(task);
    task.description = '';
    Sawl.fire({
        title: 'done',
        icon: 'success',
    })
}


</script>