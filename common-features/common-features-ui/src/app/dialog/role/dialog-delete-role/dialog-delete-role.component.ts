import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete-role',
  templateUrl: './dialog-delete-role.component.html',
  styleUrls: ['./dialog-delete-role.component.css']
})
export class DialogDeleteRoleComponent implements OnInit{

	constructor(@Inject(MAT_DIALOG_DATA) public data: any){
		
	}

	ngOnInit(): void {
	
	}
}
