import {createRouter, createWebHistory} from 'vue-router';
// Home :
import Home from './pages/Home.vue';

// Users :
import TemplateUser from './pages/users/Template.vue'
import IndexUser from './pages/users/Index.vue'
import ShowUser from './pages/users/Show.vue'

// Posts :
import TemplatePost from './pages/posts/Template.vue'
import IndexPost from './pages/posts/Index.vue'

const routes = [
    { path: '/', name: 'home', component: Home },
    
    { 
        path: '/users', name: 'userTemplate', component: TemplateUser, children: [
            { path: '', name: 'users', component: IndexUser },
            { path: ':id', name: 'userId', component: ShowUser }
        ] 
    },

    // { path: '/posts', name: 'posts', component: IndexPost }
    { 
        path: '/posts', name: 'postTemplate', component: TemplatePost, children: [
            { path: '', name: 'posts', component: IndexPost },
            // { path: ':id', name: 'postId', component: ShowPost }
        ] 
    },

];


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
