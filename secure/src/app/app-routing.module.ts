import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecureComponent } from './secure/secure.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: LoginComponent},
  {path: 'dashboard', canActivate: [AuthGuard], loadChildren: './dashboard/dashboard.module#DashboardModule'},
  {path: 'secure', component: SecureComponent},
  {path: 'edit/:id', component: SecureComponent},
  {path: 'login', component: LoginComponent},
  {path: 'list', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {}
 }
