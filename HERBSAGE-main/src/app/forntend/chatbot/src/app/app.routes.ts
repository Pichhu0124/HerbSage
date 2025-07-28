import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { todos } from './todos/todos';

export const routes: Routes = [
    {
        path:"",
        pathMatch:"full",
        loadComponent: () => {
            return import("./home/home").then((m)=>m.Home)
        }
    },
    {
        path:"chat",
        loadComponent: () => {
            return import("./chat/chat").then((m)=>m.Chat)
        }
    },
    {
        path:"login",
        component: Login,
    },
    {
        path:"register",
        component: Register,
    },
    {
        path: "todos",
        component: todos,
    }
];