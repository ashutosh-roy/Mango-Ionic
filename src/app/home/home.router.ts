import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
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
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRouter {}
