<template>

    <header class="text-center py-4">
        <!-- <i class="fa-solid fa-bars text-white cursor-pointer text-xl"></i> -->
        <h1 class="text-white text-2xl font-bold capitalize">{{ router.currentRoute.value.name }}</h1>
        <!-- <img src="./images/user1.png" alt=""> -->
    </header>


    <div class=" ">
        <RouterView></RouterView>
    </div>

    <nav class="flex justify-around items-center fixed bottom-0 w-full h-[80px]">
        <RouterLink class="flex flex-col grow items-center" to="/">
            <i class="fa-solid fa-house text-xl"></i>
            <p class="capitalize font-medium mt-1">view</p>
        </RouterLink>

        <RouterLink to="/add-task"  class="flex flex-col grow items-center cursor-pointer">
            <i class="fa-solid fa-add text-xl"></i>
            <p class="capitalize font-medium mt-1">add</p>
        </RouterLink>
    </nav>


</template>

<script setup>

import { useRouter } from 'vue-router';

const router = useRouter();

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

body {
    background-color: #121212;
    font-family: 'Quicksand', sans-serif;
    height: 100vh;
    position: relative;
}

body::-webkit-scrollbar {
    display: none;
}

nav {
    background-color: #363636;
    color: #CFCFCF;
}

nav a.router-link-active {
    color: #fff;
}



</style>
