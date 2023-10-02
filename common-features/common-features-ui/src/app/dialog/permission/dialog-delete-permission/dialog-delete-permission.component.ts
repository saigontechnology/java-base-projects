import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete-permission',
  templateUrl: './dialog-delete-permission.component.html',
  styleUrls: ['./dialog-delete-permission.component.css']
})
export class DialogDeletePermissionComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data: any){
		
	}

	ngOnInit(): void {
	
	}
}
