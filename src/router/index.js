import { createRouter, createWebHistory } from 'vue-router'
import AddTask from '@/views/AddTask.vue';
import IndexView from '@/views/IndexView.vue'

const routes = [{
        path: '/',
        name: 'view',
        component: IndexView,
    },
    {
        path: '/add-task',
        name: 'add task',
        component: AddTask,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;