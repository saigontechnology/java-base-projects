import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddRoleComponent } from 'src/app/dialog/dialog-add-role/dialog-add-role.component';
import { DialogDeleteUserComponent } from 'src/app/dialog/dialog-delete-user/dialog-delete-user.component';
import { DialogImportUserComponent } from 'src/app/dialog/dialog-import-user/dialog-import-user.component';

export interface RoleElement {
    roleId: number;  
    roleName: string;
    description: string;
  }
  
  const ELEMENT_DATA: RoleElement[] = [
    {roleId: 1, roleName: 'Customer', description: 'Normal customer'},
    {roleId: 2, roleName: 'VIP Customer', description: 'A VIP Customer is able to recive some discounts less than 10%'},
    {roleId: 3, roleName: 'Golden Customer', description: 'A golden Customer is able to recive some discounts maximum of 50%'},
    {roleId: 4, roleName: 'Employee', description: 'An employee cannot update an order'},
    {roleId: 5, roleName: 'Manager', description: 'Do many stuff'},
  ];

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements AfterViewInit {

  	displayedColumns: string[] = ['roleId', 'roleName', 'description'];
    dataSource = new MatTableDataSource<RoleElement>(ELEMENT_DATA);
    selection = new SelectionModel<RoleElement>(true, []);
  
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(
		private dialogCreateRole: MatDialog,
		private dialogDeleteAccount: MatDialog,
		private dialogImportAccount: MatDialog){

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

    openDialogCreateRole () {
		let dialogRef = this.dialogCreateRole.open(DialogAddRoleComponent, {data: {name: "Nhut"}, disableClose: true});
      	dialogRef.afterClosed().subscribe(r => {
        	console.log(`Dialog result: ${r}`);
      	})
    }

	openDialogImportAccount () {
		let dialogRef = this.dialogImportAccount.open(DialogImportUserComponent, {data: {name: "Nhut"}, disableClose: true});
      	dialogRef.afterClosed().subscribe(r => {
        	console.log(`Dialog result: ${r}`);
      	})
    }

	openDialogDeleteAccount () {
		let dialogRef = this.dialogDeleteAccount.open(DialogDeleteUserComponent, {data: {name: "Nhut"}, disableClose: true});
		dialogRef.afterClosed().subscribe(r => {
			console.log(`Dialog result: ${r}`);
		})
	}
}
