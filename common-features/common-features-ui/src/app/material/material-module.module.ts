import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatBadgeModule } from '@angular/material/badge'
import { MatMenuModule }  from '@angular/material/menu'
import { MatExpansionModule }  from '@angular/material/expansion'
import { MatDividerModule }  from '@angular/material/divider'
import { MatListModule }  from '@angular/material/list'
import { MatInputModule }  from '@angular/material/input'
import { MatTooltipModule }  from '@angular/material/tooltip'
import { MatTableModule }  from '@angular/material/table'
import { MatSortModule }  from '@angular/material/sort'
import { MatPaginatorModule }  from '@angular/material/paginator'
import { MatCheckboxModule }  from '@angular/material/checkbox'
import { MatGridListModule }  from '@angular/material/grid-list'
import { MatDialogModule }  from '@angular/material/dialog'
import { MatTabsModule }  from '@angular/material/tabs'
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

const MaterialComponents = [
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatBadgeModule,
  MatMenuModule,
  MatExpansionModule,
  MatDividerModule,
  MatListModule,
  MatInputModule,
  MatTooltipModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatCheckboxModule,
  MatGridListModule,
  MatDialogModule,
  MatTabsModule,
  MatSelectModule,
  MatFormFieldModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponents
  ],
  exports: [MaterialComponents],
})
export class MaterialModule { }
