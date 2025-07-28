import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ChatComponent } from './chat/chat.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    {
        path:"",
        pathMatch:"full",
        loadComponent: () => {
            return import("./home/home.component").then((m)=>m.HomeComponent)
        }
    },
    {
        path:"chat",
        component: ChatComponent,
        canActivate: [authGuard]
    },
    {
        path:"login",
        component: LoginComponent
    },
    {
        path:"register",
        component: RegisterComponent
    },
    {

        path:"about",
        component: AboutComponent}
];
