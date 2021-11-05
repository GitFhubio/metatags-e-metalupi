import { Routes } from '@angular/router';
import {HomeAdminComponent} from './home-admin/home-admin.component';
import {AdminListComponent} from './admin-list/admin-list.component';
import { FormComponent } from '../form/form.component';
import { UformComponent } from '../uform/uform.component';
import { LogoutComponent } from '../logout/logout.component';
import { Role } from '../models/user';
import { AuthGuardService } from '../auth-guard.service';
import { RolesService } from '../roles.service';
export const adminRoutes: Routes = [
  { path: '', component: HomeAdminComponent},
  // { path: 'admin', component: HomeAdminComponent},
  {path: 'users', component: AdminListComponent,
  canActivate:[AuthGuardService],
  data: { roles: [Role.Admin] }},
  {path: 'create-book', component:FormComponent,
  canActivate:[AuthGuardService],
  data: { roles: [Role.User] }},

  {path: 'update-book/:id', component:UformComponent,
   canActivate:[AuthGuardService],
  data: { roles: [Role.User]}},

  {path: 'logout', component:LogoutComponent},
];
