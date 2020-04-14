import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IndexPage } from './index.page';
import { IndexPageRouter } from './index.router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexPageRouter
  ],
  declarations: [IndexPage]
})
export class IndexPageModule {}
