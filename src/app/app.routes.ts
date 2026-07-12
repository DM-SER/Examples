import { Routes } from '@angular/router';
import { ModalCardUser } from './modal-card-user/modal-card-user';

export const routes: Routes = [
  {
    path: `user/:id`,
    component: ModalCardUser,
  },
];
