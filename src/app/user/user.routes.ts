import { Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { FaqComponent } from './faq/faq.component';
import { HelpComponent } from './help/help.component';
import { ResultComponent } from './result/result.component';

export const userRoutes: Routes = [
  {
    path: '',
    component: UserComponent,

    children: [
      {
        path: 'faq',
        component: FaqComponent,
      },

      {
        path: 'help',
        component: HelpComponent,
      },
      {
        path: 'main',
        component: ResultComponent,
      },
    ],
  },
];
