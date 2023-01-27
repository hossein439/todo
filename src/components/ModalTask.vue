<template>
    <div>
        <div class="popup-box flex flex-col justify-center items-center w-[350px] h-full py-6 px-4 relative rounded-lg bg-[#363636]">
            <i ref="closePopup" @click="$emit('closeModal')" class="fas fa-times popup-close-btn"></i>
            <p class="text-white capitalize font-bold absolute top-0 left-0 p-[1.2em]">Update Task</p>
            <div class="w-[80%]  mt-[2rem] mb-0">
                <form @submit.prevent="updateTask($event)" class="flex flex-col items-start">
                    <label class="flex text-left flex-col font-medium capitalize w-full text-white mt-3" for="">
                        Description
                        <input
                            class="focus:outline-none my-1 p-2 text-white border-[#979797] bg-[#363636] border rounded"
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
                    <div class="flex justify-end w-full mt-6">
                        <button
                            class="text-[#8687E7] rounded-md border border-[#8687E7] font-medium py-1 px-4 ">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref, defineProps, watch } from 'vue';
import Todos from '@/composables/Todos';

const closePopup = ref();
const todos = new Todos();
const props = defineProps(['id']);

let task = ref({
    id: undefined,
    description: undefined,
    completed: undefined
});


watch(props, () => {
    task.value = todos.getTask(props.id);
});

function updateTask() {
    todos.updateTask(task.value);
}



</script>

<style>
.popup-screen {
    background-color: rgba(7, 7, 7, 0.699);
    z-index: 1000;
    position: fixed;
    width: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    transition: .4s ease;
    transition-property: visibility;
}

.popup-screen.active {
    visibility: visible;
}

.popup-box {
    box-shadow: 0px 5px 25px rgb(0 0 0 / 20%);
    transform: scale(0);
    transition: .4s ease;
    transition-property: transform;
}

@media (min-width: 767px) {
    .popup-img-wrapper {
        width: 500px;
    }

    .popup-screen {
        /* width: 40%; */
    }
}

.popup-close-btn {
    color: #fff;
    font-size: 1.2em;
    position: absolute;
    top: 0;
    right: 0;
    padding: 1.2em;
    cursor: pointer;
}

.popup-screen.active .popup-box {
    transform: scale(1);
}

.date-custom-cell {
    background-color: #272727;
    margin: .3em;
}

.dp__calendar_header .dp__calendar_header_item {
    margin: .3em !important;
}

.dp__menu {
    background-color: #363636 !important;
    top: 100px !important;
    padding: .5em;
}

.dp__button {
    background-color: transparent !important;
}

.dp__action_row {
    background-color: transparent !important;
}

.dp__calendar_header_separator {
    background-color: #666666 !important;
}

.date-custom {}
</style>
