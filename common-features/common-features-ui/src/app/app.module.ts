import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DialogAddPermissionComponent } from './dialog/dialog-add-permission/dialog-add-permission.component';
import { DialogImportPermissionComponent } from './dialog/dialog-import-permission/dialog-import-permission.component';
import { DialogDeletePermissionComponent } from './dialog/dialog-delete-permission/dialog-delete-permission.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DialogAddPermissionComponent,
    DialogImportPermissionComponent,
    DialogDeletePermissionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule,
    ScrollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
