import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { userRoutes } from './user.routes';
import { SharedModuleModule } from '../sharedModule/sharedModule.module';
import { ResultComponent } from './result/result.component';

@NgModule({
  imports: [
    CommonModule,
    RouterOutlet,
    SharedModuleModule,
    RouterModule.forChild(userRoutes),
  ],
  declarations: [UserComponent, ResultComponent],
})
export class UserModule {}
