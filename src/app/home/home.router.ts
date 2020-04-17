import { HomeGuard } from './../guards/home.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { UserDataResolver } from '../resolvers/userData.resolver';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    canActivate:[HomeGuard],
    resolve:{
      userData: UserDataResolver
      },
    children:
    [
        {
            path:'feed',
            loadChildren: () => import('../page/feed/feed.module')
            .then(m => m.FeedPageModule)
        },
        {
            path:'settings',
            loadChildren: () => import('../page/settings/settings.module')
            .then(m => m.SettingsPageModule)
        },
        {
            path:'messages',
            loadChildren: () => import('../page/messages/messages.module')
            .then(m => m.MessagesPageModule)
        },
        {
            path:'notifications',
            loadChildren: () => import('../page/notifications/notifications.module')
            .then(m => m.NotificationsPageModule)
        },
        {
          path:'',
          redirectTo:'/home/feed',
          pathMatch:'full'
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRouter {}
