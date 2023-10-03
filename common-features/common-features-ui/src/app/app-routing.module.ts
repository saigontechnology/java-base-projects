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

import { DialogAddUserComponent } from './dialog/user/dialog-add-user/dialog-add-user.component';
import { DialogDeleteUserComponent } from './dialog/user/dialog-delete-user/dialog-delete-user.component';
import { DialogImportUserComponent } from './dialog/user/dialog-import-user/dialog-import-user.component';
import { DialogAddRoleComponent } from './dialog/role/dialog-add-role/dialog-add-role.component';
import { DialogImportRoleComponent } from './dialog/role/dialog-import-role/dialog-import-role.component';
import { DialogDeleteRoleComponent } from './dialog/role/dialog-delete-role/dialog-delete-role.component';
import { RoleDetailComponent } from './console/account/role-detail/role-detail.component';
import { PermissionComponent } from './console/account/permission/permission.component';
import { PermissionDetailComponent } from './console/account/permission-detail/permission-detail.component';
import { DialogAddPermissionComponent } from './dialog/permission/dialog-add-permission/dialog-add-permission.component';
import { DialogImportPermissionComponent } from './dialog/permission/dialog-import-permission/dialog-import-permission.component';
import { DialogDeletePermissionComponent } from './dialog/permission/dialog-delete-permission/dialog-delete-permission.component';
import { CategoryComponent } from './console/categories/category/category.component';
import { CategoryDetailComponent } from './console/categories/category-detail/category-detail.component';
import { DialogAddCategoryComponent } from './dialog/category/dialog-add-category/dialog-add-category.component';
import { DialogImportCategoryComponent } from './dialog/category/dialog-import-category/dialog-import-category.component';
import { DialogDeleteCategoryComponent } from './dialog/category/dialog-delete-category/dialog-delete-category.component';
import { ProductComponent } from './console/products/product/product.component';
import { ProductDetailComponent } from './console/products/product-detail/product-detail.component';

const routes: Routes = [
    {path:'', redirectTo:'/console', pathMatch:'full'},

    {
        path: "console",
        component: ConsoleComponent,
        children: [
            { path: "users", component: UserComponent},
            { path: "users/:id", component: UserDetailComponent},
            { path: "roles", component: RoleComponent},
            { path: "roles/:id", component: RoleDetailComponent},
            { path: "permissions", component: PermissionComponent},
            { path: "permissions/:id", component: PermissionDetailComponent},
            { path: "categories", component: CategoryComponent},
            { path: "categories/:id", component: CategoryDetailComponent},
            { path: "products", component: ProductComponent},
            { path: "products/:id", component: ProductDetailComponent},
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
    RoleDetailComponent,
    PermissionComponent,
    DialogAddPermissionComponent,
    DialogImportPermissionComponent,
    DialogDeletePermissionComponent,
    PermissionDetailComponent,
    CategoryComponent,
    CategoryDetailComponent,
    DialogAddCategoryComponent,
    DialogImportCategoryComponent,
    DialogDeleteCategoryComponent,
    ProductComponent,
    ProductDetailComponent,
]
