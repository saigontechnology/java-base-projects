import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-import-category',
  templateUrl: './dialog-import-category.component.html',
  styleUrls: ['./dialog-import-category.component.css']
})
export class DialogImportCategoryComponent implements OnInit{

    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {

	}

	ngOnInit(): void {
	
	}
  
}
