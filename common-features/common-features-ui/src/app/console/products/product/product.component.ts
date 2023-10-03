import { Router } from '@angular/router';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { DialogImportProductComponent } from 'src/app/dialog/product/dialog-import-product/dialog-import-product.component';
import { DialogDeleteProductComponent } from 'src/app/dialog/product/dialog-delete-product/dialog-delete-product.component';

export interface ProductElement {
    id: number;  
    image: string;
    name: string;
    importPrice: number;
    sellingPrice: number;
    amount: number,
    publishedDate: string,
    expiredDate: string,
    category: string,
    size: string,
    color: string,
    description: string
  }
  
  const ELEMENT_DATA: ProductElement[] = [
    {id: 1, image: '../../../../assets/avatar.jpeg', name: 'Hydrogen', importPrice: 1000, sellingPrice: 1500, amount: 2, publishedDate: "14-04-1990", expiredDate: "14-04-3000", category: "Food", size: "L", color: "red", description: "abc"},
    {id: 2, image: '../../../../assets/avatar.jpeg', name: 'Hydrogen', importPrice: 1000, sellingPrice: 1500, amount: 2, publishedDate: "14-04-1990", expiredDate: "14-04-3000", category: "Food", size: "L", color: "red", description: "abc"},
    {id: 3, image: '../../../../assets/avatar.jpeg', name: 'Hydrogen', importPrice: 1000, sellingPrice: 1500, amount: 2, publishedDate: "14-04-1990", expiredDate: "14-04-3000", category: "Food", size: "L", color: "red", description: "abc"},
    {id: 4, image: '../../../../assets/avatar.jpeg', name: 'Hydrogen', importPrice: 1000, sellingPrice: 1500, amount: 2, publishedDate: "14-04-1990", expiredDate: "14-04-3000", category: "Food", size: "L", color: "red", description: "abc"},
    {id: 5, image: '../../../../assets/avatar.jpeg', name: 'Hydrogen', importPrice: 1000, sellingPrice: 1500, amount: 2, publishedDate: "14-04-1990", expiredDate: "14-04-3000", category: "Food", size: "L", color: "red", description: "abc"},
    {id: 6, image: '../../../../assets/avatar.jpeg', name: 'Hydrogen', importPrice: 1000, sellingPrice: 1500, amount: 2, publishedDate: "14-04-1990", expiredDate: "14-04-3000", category: "Food", size: "L", color: "red", description: "abc"},
    {id: 7, image: '../../../../assets/avatar.jpeg', name: 'Hydrogen', importPrice: 1000, sellingPrice: 1500, amount: 2, publishedDate: "14-04-1990", expiredDate: "14-04-3000", category: "Food", size: "L", color: "red", description: "abc"},
    {id: 8, image: '../../../../assets/avatar.jpeg', name: 'Hydrogen', importPrice: 1000, sellingPrice: 1500, amount: 2, publishedDate: "14-04-1990", expiredDate: "14-04-3000", category: "Food", size: "L", color: "red", description: "abc"},
    {id: 9, image: '../../../../assets/avatar.jpeg', name: 'Hydrogen', importPrice: 1000, sellingPrice: 1500, amount: 2, publishedDate: "14-04-1990", expiredDate: "14-04-3000", category: "Food", size: "L", color: "red", description: "abc"},
    {id: 10, image: '../../../../assets/avatar.jpeg', name: 'Hydrogen', importPrice: 1000, sellingPrice: 1500, amount: 2, publishedDate: "14-04-1990", expiredDate: "14-04-3000", category: "Food", size: "L", color: "red", description: "abc"},
  ];

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements AfterViewInit{

  displayedColumns: string[] = ['id', 'image', 'name', 'importPrice', 'sellingPrice', 'amount', 'publishedDate', 'expiredDate', 'category'];
    dataSource = new MatTableDataSource<ProductElement>(ELEMENT_DATA);
    selection = new SelectionModel<ProductElement>(true, []);
  
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(
		private dialogDeleteProduct: MatDialog,
		private dialogImportProduct: MatDialog,
    private router: Router){

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

    openDialogCreateProduct () {
      this.router.navigate(['console/products-detail']);
    }

	openDialogImportProducts () {
		let dialogRef = this.dialogImportProduct.open(DialogImportProductComponent, {data: {name: "Nhut"}, disableClose: true});
      	dialogRef.afterClosed().subscribe(r => {
        	console.log(`Dialog result: ${r}`);
      	})
    }

	openDialogDeleteProduct () {
		let dialogRef = this.dialogDeleteProduct.open(DialogDeleteProductComponent, {data: {name: "Nhut"}, disableClose: true});
		dialogRef.afterClosed().subscribe(r => {
			console.log(`Dialog result: ${r}`);
		})
	}
}
