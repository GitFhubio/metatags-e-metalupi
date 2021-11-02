import { Routes } from '@angular/router';
import {HomeAdminComponent} from './home-admin/home-admin.component';
import {AdminListComponent} from './admin-list/admin-list.component';
export const adminRoutes: Routes = [
  { path: '', component: HomeAdminComponent},
  // { path: 'admin', component: HomeAdminComponent},
  {path: 'users', component: AdminListComponent},
];
