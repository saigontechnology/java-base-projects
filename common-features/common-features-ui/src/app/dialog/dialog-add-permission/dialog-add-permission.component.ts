import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-permission',
  templateUrl: './dialog-add-permission.component.html',
  styleUrls: ['./dialog-add-permission.component.css']
})
export class DialogAddPermissionComponent implements OnInit {
    
	constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

	ngOnInit(): void {

	}
}
