import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from 'src/app/dialog/user/dialog-add-user/dialog-add-user.component';
import { DialogDeleteUserComponent } from 'src/app/dialog/user/dialog-delete-user/dialog-delete-user.component';
import { DialogImportUserComponent } from 'src/app/dialog/user/dialog-import-user/dialog-import-user.component';

export interface PeriodicElement {
    userId: number;  
    email: string;
    fullName: string;
    avatar: string;
    role: string;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {userId: 1, email: 'Hydrogen', fullName: 'Hydrogen', avatar: '../../../../assets/avatar.jpeg', role: 'normal'},
    {userId: 2, email: 'Helium', fullName: 'Hydrogen', avatar: '../../../../assets/avatar.jpeg', role: 'admin'},
    {userId: 3, email: 'Lithium', fullName: 'Hydrogen', avatar: '../../../../assets/avatar.jpeg', role: 'suppervisor'},
    {userId: 4, email: 'Beryllium', fullName: 'Hydrogen', avatar: '../../../../assets/avatar.jpeg', role: 'normal'},
    {userId: 5, email: 'Boron', fullName: 'Hydrogen', avatar: '../../../../assets/avatar.jpeg', role: 'normal'},
    {userId: 6, email: 'Carbon', fullName: 'Hydrogen', avatar: '../../../../assets/avatar.jpeg', role: 'normal'},
    {userId: 7, email: 'Nitrogen', fullName: 'Hydrogen', avatar: '../../../../assets/avatar.jpeg', role: 'normal'},
    {userId: 8, email: 'Oxygen', fullName: 'Hydrogen', avatar: '../../../../assets/avatar.jpeg', role: 'normal'},
    {userId: 9, email: 'Fluorine', fullName: 'Hydrogen', avatar: '../../../../assets/avatar.jpeg', role: 'normal'},
    {userId: 10, email: 'Neon', fullName: 'Hydrogen', avatar: '../../../../assets/avatar.jpeg', role: 'normal'},
    {userId: 11, email: 'Sodium', fullName: 'Hydrogen', avatar: '../../../../assets/avatar.jpeg', role: 'normal'},
    {userId: 12, email: 'Magnesium', fullName: 'Hydrogen', avatar: '../../../../assets/avatar.jpeg', role: 'normal'},
    {userId: 13, email: 'Aluminum', fullName: 'Hydrogen', avatar: '../../../../assets/avatar.jpeg', role: 'normal'},
    {userId: 14, email: 'Silicon', fullName: 'Hydrogen', avatar: '../../../../assets/avatar.jpeg', role: 'normal'},
    {userId: 15, email: 'Phosphorus', fullName: 'Hydrogen', avatar: '../../../../assets/avatar.jpeg', role: 'normal'},
    {userId: 16, email: 'Sulfur', fullName: 'Hydrogen', avatar: '../../../../assets/avatar.jpeg', role: 'normal'},
    {userId: 17, email: 'Chlorine', fullName: 'Hydrogen', avatar: '../../../../assets/avatar.jpeg', role: 'normal'},
    {userId: 18, email: 'Argon', fullName: 'Hydrogen', avatar: '../../../../assets/avatar.jpeg', role: 'normal'},
    {userId: 19, email: 'Potassium', fullName: 'Hydrogen', avatar: '../../../../assets/avatar.jpeg', role: 'normal'},
    {userId: 20, email: 'Calcium', fullName: 'Hydrogen', avatar: '../../../../assets/avatar.jpeg', role: 'normal'},
  ];

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements AfterViewInit{

    displayedColumns: string[] = ['userId', 'avatar', 'email', 'fullName', 'role', 'select'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    selection = new SelectionModel<PeriodicElement>(true, []);
  
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(
		private dialogCreateAccount: MatDialog,
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

    openDialogCreateAccount () {
		let dialogRef = this.dialogCreateAccount.open(DialogAddUserComponent, {data: {name: "Nhut"}, disableClose: true});
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