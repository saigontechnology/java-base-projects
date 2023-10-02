import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete-category',
  templateUrl: './dialog-delete-category.component.html',
  styleUrls: ['./dialog-delete-category.component.css']
})
export class DialogDeleteCategoryComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data: any){
		
	}

	ngOnInit(): void {
	
	}
}
