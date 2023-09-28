import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-import-permission',
  templateUrl: './dialog-import-permission.component.html',
  styleUrls: ['./dialog-import-permission.component.css']
})
export class DialogImportPermissionComponent implements OnInit{
    
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {

	}

	ngOnInit(): void {
	
	}

}
