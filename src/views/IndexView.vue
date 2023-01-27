<template>
    <main class="text-center text-white pt-[3em] h-[400px] overflow-y-scroll">
        <div v-if="completedTasks.length === 0">
            <img src="../images/index.png" class="mx-auto mt-12" alt="">
            <h1 class="text-xl font-semibold">What do you want to do today?</h1>
            <p class="font-semibold pt-5">Tap + to add your tasks</p>
        </div>
        <div v-else class="grid grid-cols-2">
            <div class="p-4">
                <p class="text-xl pb-3 text-white">Completed Task</p>
                <div class="grid grid-cols-2 gap-4 border p-5 rounded border-zinc-700">
                    <div v-for="(value, key, index) in completedTasks" :key="index"
                        class="bg-[#363636] xs:w-full rounded-md flex justify-between items-center px-5 py-2">
                        <div @click="todos.deleteTask(value.id)" class="pr-8 cursor-pointer">
                            <i class="fa-solid fa-trash-can text-[#FF4949] hover:opacity-80 transition-all"></i>
                        </div>
                        <div class="flex flex-col text-left grow">
                            <div class="text-white">
                                {{ value.title }}
                            </div>
                            <div class="text-[#AFAFAF]">
                                {{ value.description }}
                            </div>
                        </div>
                        <div ref="popup" class="open-modal" @click="open(value.id)">
                            <i class="fa-solid fa-pen text-white cursor-pointer hover:opacity-80 transition-all"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-4">
                <p class="text-xl pb-3 text-white">Uncompleted Task</p>
                <div class="grid grid-cols-2 gap-4 border p-5 rounded border-zinc-700">
                    <div v-for="(value, key, index) in uncompletedTasks" :key="index"
                        class="bg-[#363636] xs:w-full rounded-md flex justify-between items-center px-5 py-2">
                        <div @click="todos.deleteTask(value.id)" class="pr-8 cursor-pointer">
                            <i class="fa-solid fa-trash-can text-[#FF4949] hover:opacity-80 transition-all"></i>
                        </div>
                        <div class="flex flex-col text-left grow">
                            <div class="text-white">
                                {{ value.title }}
                            </div>
                            <div class="text-[#AFAFAF]">
                                {{ value.description }}
                            </div>
                        </div>
                        <div ref="popup" class="open-modal" @click="open(value.id)">
                            <i class="fa-solid fa-pen text-white cursor-pointer hover:opacity-80 transition-all"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div ref="popupScreen" class="popup-screen">
            <ModalTask :id="taskId" @close-modal="close"></ModalTask>
        </div>
    </main>
</template>

<script setup>
import ModalTask from '@/components/ModalTask.vue';
import { ref, watch } from 'vue';
import Todos from '@/composables/Todos';

const todos = new Todos();
let completedTasks = ref(todos.completedTask());
let uncompletedTasks = ref(todos.uncompletedTask());
let taskId = ref();

watch(todos, () => {
    console.log(completedTasks.value);
});

//--------- Modal Update ---------\\
const popup = ref();
const popupScreen = ref();

function close() {
    popupScreen.value.classList.remove('active');
}
function open(id) {
    taskId.value = id;
    popupScreen.value.classList.add('active');
}
//--------- Modal Update ---------\\




</script>

<style>

main::-webkit-scrollbar {
    display: none;
}
</style>
