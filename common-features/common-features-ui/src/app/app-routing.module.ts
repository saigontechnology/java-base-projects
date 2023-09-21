import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './console/account/user/user.component';
import { RoleComponent } from './console/account/role/role.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ConsoleComponent } from './console/console.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailComponent } from './console/account/user-detail/user-detail.component';

import { DialogAddUserComponent } from './dialog/dialog-add-user/dialog-add-user.component';
import { DialogDeleteUserComponent } from './dialog/dialog-delete-user/dialog-delete-user.component';
import { DialogImportUserComponent } from './dialog/dialog-import-user/dialog-import-user.component';
import { DialogAddRoleComponent } from './dialog/dialog-add-role/dialog-add-role.component';
import { DialogImportRoleComponent } from './dialog/dialog-import-role/dialog-import-role.component';
import { DialogDeleteRoleComponent } from './dialog/dialog-delete-role/dialog-delete-role.component';
import { RoleDetailComponent } from './console/account/role-detail/role-detail.component';

const routes: Routes = [
    {path:'', redirectTo:'/console', pathMatch:'full'},

    {
        path: "console",
        component: ConsoleComponent,
        children: [
            { path: "users", component: UserComponent},
            { path: "users/:id", component: UserDetailComponent},
            { path: "roles", component: RoleComponent},
            { path: "roles/:id", component: RoleDetailComponent}
        ]
    },
    {path: "auth/login", component: LoginComponent},
    {path: "auth/register", component: RegisterComponent},
    {path: "auth/change-password", component: ChangePasswordComponent},
    {path: "auth/forgot-password", component: ForgotPasswordComponent},

    {path: "**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
    ConsoleComponent,
    UserComponent,
    RoleComponent,
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    PageNotFoundComponent,
    UserDetailComponent,
    DialogAddUserComponent,
    DialogDeleteUserComponent,
    DialogImportUserComponent,
    DialogAddRoleComponent,
    DialogImportRoleComponent,
    DialogDeleteRoleComponent,
    RoleDetailComponent
]
