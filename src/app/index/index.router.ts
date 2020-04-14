import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexPage } from './index.page';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,   
    children:
    [
        {
            path:'welcome',
            loadChildren: () => import('../page/welcome/welcome.module')
            .then(m => m.WelcomePageModule)
        },
        {
            path:'login',
            loadChildren: () => import('../page/login/login.module')
            .then(m => m.LoginPageModule)
        },
        {
            path:'signup',
            loadChildren: () => import('../page/signup/signup.module')
            .then(m => m.SignupPageModule)
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRouter{}
