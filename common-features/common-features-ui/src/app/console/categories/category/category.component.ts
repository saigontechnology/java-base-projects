import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { DialogImportPermissionComponent } from 'src/app/dialog/permission/dialog-import-permission/dialog-import-permission.component';
import { DialogDeletePermissionComponent } from 'src/app/dialog/permission/dialog-delete-permission/dialog-delete-permission.component';
import { DialogAddCategoryComponent } from 'src/app/dialog/category/dialog-add-category/dialog-add-category.component';
import { DialogImportCategoryComponent } from 'src/app/dialog/category/dialog-import-category/dialog-import-category.component';
import { DialogDeleteCategoryComponent } from 'src/app/dialog/category/dialog-delete-category/dialog-delete-category.component';

export interface CategoryElement {
  id: number;  
  name: string;
}

const ELEMENT_DATA: CategoryElement[] = [
  {id: 1, name: 'Food'},
  {id: 2, name: 'Drink'}
];

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements AfterViewInit {

  	displayedColumns: string[] = ['id', 'name'];
    dataSource = new MatTableDataSource<CategoryElement>(ELEMENT_DATA);
    selection = new SelectionModel<CategoryElement>(true, []);
  
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(
		private dialogCreateCategory: MatDialog,
		private dialogDeleteCategory: MatDialog,
		private dialogImportCategory: MatDialog){

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

    openDialogCreateCategory () {
		let dialogRef = this.dialogCreateCategory.open(DialogAddCategoryComponent, {data: {name: "Nhut"}, disableClose: true});
      	dialogRef.afterClosed().subscribe(r => {
        	console.log(`Dialog result: ${r}`);
      	})
    }

	openDialogImportCategory () {
		let dialogRef = this.dialogImportCategory.open(DialogImportCategoryComponent, {data: {name: "Nhut"}, disableClose: true});
      	dialogRef.afterClosed().subscribe(r => {
        	console.log(`Dialog result: ${r}`);
      	})
    }

	openDialogDeleteCategory () {
		let dialogRef = this.dialogDeleteCategory.open(DialogDeleteCategoryComponent, {data: {name: "Nhut"}, disableClose: true});
		dialogRef.afterClosed().subscribe(r => {
			console.log(`Dialog result: ${r}`);
		})
	}
}
