import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { UformComponent } from './uform/uform.component';
import {AdminListComponent} from './admin/admin-list/admin-list.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { adminRoutes } from './admin/admin.routes';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

import { MainService } from './mainservice.service';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent

},   { path:'form',
component:FormComponent

},
{ path:'update/:id',
component:UformComponent

},
{ path: 'register',
component: RegisterComponent},
{ path: 'login',
component: LoginComponent},
{ path: 'logout',
component: LogoutComponent},

{ path: 'admin',
component: DashboardComponent,
children: adminRoutes,
canActivate: [MainService] //sarebbe stato meglio fare diversi services per ordine ma è uguale
}
// { path: 'admin',
// component: HomeAdminComponent,
// children: adminRoutes}

// {path: 'admin/users',
//  component: AdminListComponent},
//  {path: 'admin',
//  component: HomeAdminComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
