import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { ModerationComponent } from './moderation/moderation.component';

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,

    children: [
      {
        path: 'moderation',
        component: ModerationComponent,
      },
    ],
  },
];
@NgModule({
  imports: [CommonModule, RouterModule, RouterModule.forChild(adminRoutes)],
  declarations: [AdminComponent, NavigationComponent],
})
export class AdminModule {}
