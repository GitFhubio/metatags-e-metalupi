import { Routes } from '@angular/router';
import {HomeAdminComponent} from './home-admin/home-admin.component';
import {AdminListComponent} from './admin-list/admin-list.component';
import { FormComponent } from '../form/form.component';
import { UformComponent } from '../uform/uform.component';
import { LogoutComponent } from '../logout/logout.component';
export const adminRoutes: Routes = [
  { path: '', component: HomeAdminComponent},
  // { path: 'admin', component: HomeAdminComponent},
  {path: 'users', component: AdminListComponent},

  {path: 'create-book', component:FormComponent},

  {path: 'update-book/:id', component:UformComponent},

  {path: 'logout', component:LogoutComponent},
];
