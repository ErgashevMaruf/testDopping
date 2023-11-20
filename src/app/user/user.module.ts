import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { userRoutes } from './user.routes';
import { SharedModuleModule } from '../sharedModule/sharedModule.module';
import { ResultComponent } from './result/result.component';
import { NgxSummernoteModule } from 'ngx-summernote';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  imports: [
    CommonModule,
    RouterOutlet,
    SharedModuleModule,
    RouterModule.forChild(userRoutes),
    NgxSummernoteModule,
  ],
  declarations: [UserComponent, ResultComponent, FaqComponent],
})
export class UserModule {}
