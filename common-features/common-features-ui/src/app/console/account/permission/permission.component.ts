import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPermissionComponent } from 'src/app/dialog/permission/dialog-add-permission/dialog-add-permission.component';
import { DialogImportPermissionComponent } from 'src/app/dialog/permission/dialog-import-permission/dialog-import-permission.component';
import { DialogDeletePermissionComponent } from 'src/app/dialog/permission/dialog-delete-permission/dialog-delete-permission.component';

export interface PermissionElement {
  permissionId: number;  
  permissionName: string;
  description: string;
}

const ELEMENT_DATA: PermissionElement[] = [
  {permissionId: 1, permissionName: 'Read', description: 'Normal customer'},
  {permissionId: 2, permissionName: 'Write', description: 'A VIP Customer is able to recive some discounts less than 10%'},
  {permissionId: 3, permissionName: 'Read & Write', description: 'A golden Customer is able to recive some discounts maximum of 50%'},
  {permissionId: 4, permissionName: 'Update', description: 'An employee cannot update an order'},
  {permissionId: 5, permissionName: 'Delete', description: 'Do many stuff'},
];

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css']
})
export class PermissionComponent implements AfterViewInit{

  displayedColumns: string[] = ['roleId', 'roleName', 'description'];
    dataSource = new MatTableDataSource<PermissionElement>(ELEMENT_DATA);
    selection = new SelectionModel<PermissionElement>(true, []);
  
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(
		private dialogCreatePermission: MatDialog,
		private dialogDeletePermission: MatDialog,
		private dialogImportPermission: MatDialog){

    }
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }

    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }
  
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
      this.isAllSelected() ?
          this.selection.clear() :
          this.dataSource.data.forEach(row => this.selection.select(row));
    }

    openDialogCreatePermission () {
		let dialogRef = this.dialogCreatePermission.open(DialogAddPermissionComponent, {data: {name: "Nhut"}, disableClose: true});
      	dialogRef.afterClosed().subscribe(r => {
        	console.log(`Dialog result: ${r}`);
      	})
    }

	openDialogImportPermission () {
		let dialogRef = this.dialogImportPermission.open(DialogImportPermissionComponent, {data: {name: "Nhut"}, disableClose: true});
      	dialogRef.afterClosed().subscribe(r => {
        	console.log(`Dialog result: ${r}`);
      	})
    }

	openDialogDeletePermission () {
		let dialogRef = this.dialogDeletePermission.open(DialogDeletePermissionComponent, {data: {name: "Nhut"}, disableClose: true});
		dialogRef.afterClosed().subscribe(r => {
			console.log(`Dialog result: ${r}`);
		})
	}

}
