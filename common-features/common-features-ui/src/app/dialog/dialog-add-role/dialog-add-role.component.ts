import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-role',
  templateUrl: './dialog-add-role.component.html',
  styleUrls: ['./dialog-add-role.component.css']
})
export class DialogAddRoleComponent implements OnInit{

	constructor(@Inject(MAT_DIALOG_DATA) public data: any) {

    }

	ngOnInit(): void {

	}

}
